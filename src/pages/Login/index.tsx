import React from 'react';

import logo from '../../assets/globe.png';
import { Nav, GoBack, FormSection } from './styles';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

import { FaArrowLeft } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

const Register: React.FC = () => {
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
            <h1>Logar</h1>
          </div>
          <form>
            <div className="fieldGroup">
              <div className="fieldItem">
                <label htmlFor="name">E-mail</label>
                <input type="text" name="email"/>
              </div>

              <div className="fieldItem">
                <label htmlFor="name">Senha</label>
                <input type="password" name="password"/>
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
