import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import { Nav, Search, MapSection, News, Footer } from './styles';

import { FaTwitter, FaFacebookSquare, FaGooglePlusG, FaWhatsapp } from 'react-icons/fa';

import logo from '../../assets/globe.png';
import chuvaIcon from '../../assets/guarda.png';
import desastreIcon from '../../assets/desastre.png';
import riskIcon from '../../assets/risk.png';

const Home: React.FC = () => {
  return (
    <>
      <Nav>
        <img src={logo} alt="Area de risco" />
        <div id="title">
          <h1>Área de risco</h1>
        </div>
      </Nav>
      <Search>
        <span>Saiba se você está em uma área de risco com apenas um passo.</span>
        <form>
          <input placeholder="Busque pelo endereço" />
          <button type="submit">Buscar</button>
        </form>
      </Search>
      <MapSection>
        <span>Informações direto no Mapa</span>
        <p>Veja no mapa abaixo se há alguma informação recente sobre sua região.</p>

        <div className="map-container">
          <Map
            center={[-16.9526873, -51.799464]}
            style={{
              width: '100%',
              height: '100%'
            }}
            zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
          </Map>
        </div>

        <div id="legenda">
          <span>Legenda dos ícones</span>
          <p>Abaixo está a legenda dos ícones usados no mapa, para a orientação.</p>

          <div className="icons">
            <div className="icon">
              <img src={ chuvaIcon } alt="chuva"/>
              <span className="iconTitle">Chuva</span>
            </div>
            <div className="icon">
              <img src={ desastreIcon } alt="desastres"/>
              <span className="iconTitle">Desastres</span>
            </div>
            <div className="icon">
              <img src={ riskIcon } alt="risco"/>
              <span className="iconTitle">Risco</span>
            </div>
          </div>
          <p>O mapa é composto por três icones, Chuva, Desastres e Risco.</p>
        </div>
      </MapSection>
      <News>
        <h1>Notícias</h1>
        <p>Algumas Informações recentes sobre a cidade de betim.</p>

        <div className="newsBlock">
          <div className="news">
            <span>Defesa civil emite alertas para chuvas isoladas.</span>
            <p>Órgão municipal também divulgou algumas dicas importantes com procedimentos a serem tomados e evitados em caso de chuvas fortes.</p>
            <a href="##">Ler mais</a>
          </div>
          <div className="news">
            <span>Uso de máscaras passa a ser obrigatório em Betim partir de hoje</span>
            <p>Prefeito afirma que adesão da população é essencial para aretomada das atividades no município; Apromiv vai dobrar a produção nos próximos dias</p>
            <a href="##">Ler mais</a>
          </div>
          <div className="news">
            <span>Corona Vírus: Primeiro mês do isolamento social em BH evitou 200 mortes</span>
            <p>Com o isolamento social, surgiram cenas até então inéditas: ruas vazias e pessoas usando máscaras</p>
            <a href="##">Ler mais</a>
          </div>
        </div>
      </News>
      <Footer>
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
      </Footer>
    </>
  );
}

export default Home;
