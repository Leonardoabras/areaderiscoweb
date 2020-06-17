import React from 'react';

import logo from '../../assets/globe.png';

import { Nav } from './styles';

const NavBar: React.FC = ({children}) => {
  return (
    <Nav>
      <img src={logo} alt="Area de risco" />
      <div id="title">
        <h1>Área de risco</h1>
      </div>
      {children}
    </Nav>
  );
};

export default NavBar;
