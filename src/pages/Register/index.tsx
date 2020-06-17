import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAuth } from '../../hooks/AuthContext';

import logo from '../../assets/globe.png';
import { Nav, GoBack, FormSection } from './styles';
import { Link, useHistory } from 'react-router-dom';

import Footer from '../../components/Footer';

import { FaArrowLeft } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

interface IData {
  name: string;
  email: string;
  password: string;
  cPassword: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const {user} = useAuth();

  const [formData, setFormData] = useState<IData>({
    name: '',
    email: '',
    password: '',
    cPassword: '',
  });

  useEffect(() => {
    if(user){
      history.push('/');
    }
  }, [user, history])

  const handleDataInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const { name, email, password, cPassword } = formData;

    if(
      name === '' ||
      email === '' ||
      password === '' ||
      cPassword === ''
    ) {
      alert('Erro: Preencha todos os campos e tente novamente.');
    }
    else {
      if(password !== cPassword) {
        alert('Erro: As senhas não se coincidem, tente novamente.');
      }
      else {
        const data: Omit<IData, 'cPassword'> = { name, email, password };

        api.post('/user', data).then(res => {
          if(res.status === 200) {
            alert('Conta criada com sucesso');

            history.push('/login');
          }
          else if(res.status === 400) {
            alert('Erro: Failed on data validation.');
          }
        });
      }
    }
  };

  return (
    <>
      <Nav>
        <img src={logo} alt="Area de risco" />
        <div id="title">
          <h1>Área de risco</h1>
        </div>
        <GoBack to="/">
          <FaArrowLeft />
          <span>Início</span>
        </GoBack>
      </Nav>
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <FormSection>
          <div className="title">
            <h1>Registrar</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="fieldGroup">
              <div className="fieldItem">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleDataInput}
                />
              </div>

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

              <div className="fieldItem">
                <label htmlFor="name">Confirme sua senha</label>
                <input
                  type="password"
                  name="cPassword"
                  value={formData.cPassword}
                  onChange={handleDataInput}
                />
              </div>

              <button type="submit">Enviar</button>
            </div>
            <Link to="/login">
              <span>Fazer login</span>
              <FiLogIn size={20} />
            </Link>
          </form>
        </FormSection>
      </main>
      <Footer />
    </>
  );
};

export default Login;
