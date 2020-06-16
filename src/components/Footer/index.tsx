import React from 'react';

import { FooterContainer } from './styles';
import { FaTwitter, FaFacebookSquare, FaGooglePlusG, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Quanto mais pessoas informadas , menos chances de uma tragedia ocorrer.</p>
      <p>Compartilhe em suas Redes sociais e mantenha todos em alerta!</p>

      <div className="socialMediaIcons">
        <a href="##"><FaTwitter color="#000" size={20} /></a>
        <a href="##"><FaFacebookSquare color="#000" size={20} /></a>
        <a href="##"><FaGooglePlusG color="#000" size={20} /></a>
        <a href="##"><FaWhatsapp color="#000" size={20} /></a>
      </div>

      <hr/>

      <p>Copyright 2020 - Grupo AREA DE RISCO. Todos os direitos reservados - Site desenvolvido sem fins lucrativos.</p>
    </FooterContainer>
  );
}

export default Footer;
