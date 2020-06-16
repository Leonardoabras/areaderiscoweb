import React, { useState, ChangeEvent, FormEvent } from 'react';

import logo from '../../assets/globe.png';
import { Nav, GoBack, FormSection } from './styles';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

import { FaArrowLeft } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

interface IData {
  name: string;
  email: string;
  password: string;
  cPassword: string;
}

const Login: React.FC = () => {

  const [passwordEquals, setPasswordEquals] = useState(false);
  const [formData, setFormData] = useState<IData>({
    name: '',
    email: '',
    password: '',
    cPassword: '',
  });

  const handleDataInput = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'password' || event.target.name === 'cPassword') {
      handleConfirmPassword();
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleConfirmPassword = () => {
    formData.password === formData.cPassword ?
    setPasswordEquals(true) : setPasswordEquals(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const { name, email, password, cPassword } = formData;
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
          <form>
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
                  name="cpassword"
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
