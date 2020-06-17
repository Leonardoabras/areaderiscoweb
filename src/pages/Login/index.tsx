import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAuth } from '../../hooks/AuthContext';

import { GoBack, FormSection } from './styles';
import { Link, useHistory } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { FaArrowLeft } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

interface IData {
  email: string;
  password: string;
}

const Register: React.FC = () => {

  const history = useHistory();

  const {user, signIn} = useAuth();

  useEffect(() => {
    if(user){
      history.push('/');
    }
  }, [user, history]);

  const [formData, setFormData] = useState<IData>({
    email: '',
    password: '',
  });

  const handleDataInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { email, password } = formData;

    if(
      email === '' ||
      password === ''
    ) {
      alert('Erro: Preencha todos os campos e tente novamente.');
    }
    else {
      const data: IData = { email, password };

      await signIn(data);
    }
  };

  return (
    <>
      <NavBar>
        <GoBack to="/">
          <FaArrowLeft />
          <span>Início</span>
        </GoBack>
      </NavBar>
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <FormSection>
          <div className="title">
            <h1>Logar</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="fieldGroup">
              <div className="fieldItem">
                <label htmlFor="name">E-mail</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleDataInput}
                />
              </div>

              <div className="fieldItem">
                <label htmlFor="name">Senha</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleDataInput}
                />
              </div>

              <button type="submit">Entrar</button>
            </div>
            <Link to="/register">
              <span>Fazer Cadastro</span>
              <FiLogIn size={20} />
            </Link>
          </form>
        </FormSection>
      </main>
      <Footer />
    </>
  );
};

export default Register;
