import React,{useEffect, useState, FormEvent, ChangeEvent} from 'react';
import {useAuth} from '../../hooks/AuthContext';
import { Map, TileLayer,Marker, Popup , } from 'react-leaflet';
import L from 'leaflet';
import { Search, MapSection, News, Redirectbutton } from './styles';
import { FiLogOut, FiUser, FiTarget } from 'react-icons/fi';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import api from '../../services/api';
import chuvaIcon from '../../assets/umbrella.png';
import desastreIcon from '../../assets/desastre.png';
import riskIcon from '../../assets/risk.png';
import myLocationIcon from '../../assets/pin.png';
import axios from 'axios';

interface Risk{
  id:number,
  latitude:number,
  longitude:number,
  risk:string,
  local:string
}

const Home: React.FC = () => {
  const {user, signOut} = useAuth();

  const [myPosition, setMyPosition] = useState<[number,number]>([0,0]);
  const [zoom, setZoom] = useState<number>(12);
  const [betimPosition, setBetimPosition] = useState<[number,number]>([-19.9419331, -44.262343]);
  const [risks, setRisks] = useState<Risk []>([]);

  const [searchForm, setSearchForm] = useState<string>('');

  const handleDataInput = (event: ChangeEvent<HTMLInputElement>) => {
     setSearchForm(event.target.value);
  };


  const myLocation = L.icon({
    iconUrl: myLocationIcon,
    iconSize: [55,55]
  });

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position =>{
        const {latitude, longitude} = position.coords;

        setMyPosition([latitude, longitude]);
    });
  },[]);


  useEffect(()=>{
   api.get('location').then(response =>{
      setRisks(response.data);
    });
  },[]);


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if(searchForm.length !== 9){

      return alert('CEP invalido');
    }

    axios.get(`https://geocode.xyz/${searchForm}?json=8503316457244f98bc7852654e24858e`)
    .then(response => {
      console.log(response.data);
      const {latt, longt} = response.data;
      setBetimPosition([latt, longt]);
      setZoom(13);
    });

  };

  function iconPoint(icon:string){
    const size: [number,number] = [50,50];
    if( icon === 'desastre'){
      var iconDesastre = L.icon({
        iconUrl: desastreIcon,
        iconSize: size
      });
      return iconDesastre;
    }

    if( icon === 'risco'){
      const iconRisk = L.icon({
        iconUrl: riskIcon,
        iconSize: size
      });
      return iconRisk;
    }

    if( icon === 'chuva'){
      const iconChuva = L.icon({
        iconUrl: chuvaIcon,
        iconSize: size
      });
      return iconChuva;
    }
  }

  return (
    <>
      <NavBar>
        {
          !user ? (
            <>
              <Redirectbutton to="login">Login</Redirectbutton>
              <Redirectbutton to="register">Registrar</Redirectbutton>
            </>
          ) : (
            <>
              <span style={{ display: 'flex', alignSelf: 'center', paddingRight: '10px' }}>{user.name}<FiUser style={{ alignSelf: 'center' }} size={20} /></span>
              <Redirectbutton to="/register/target">Registrar Area de Risco<FiTarget /></Redirectbutton>
              <Redirectbutton to="/" onClick={signOut}>Logout<FiLogOut /></Redirectbutton>
            </>
          )
        }
      </NavBar>
      <main>
        <Search>
          <span>Saiba se você está em uma área de risco com apenas um passo.</span>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Busque pelo seu CEP"
              maxLength={9}
              type="text"
              value={searchForm}
              onChange={handleDataInput}
            />
            <button type="submit">Buscar</button>
          </form>
        </Search>
        <MapSection>
          <span>Informações direto no Mapa</span>
          <p>Veja no mapa abaixo se há alguma informação recente sobre sua região.</p>

          <div className="map-container">
            <Map
              center={betimPosition}
              style={{
                width: '100%',
                height: '100%'
              }}
              zoom={zoom}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={myPosition}
                    icon={myLocation}>
                    <Popup>Minha posição</Popup>
                </Marker>
              {
                risks ? risks.map(risk =>
                  (
                    <Marker key={risk.id}
                    position={[risk.latitude, risk.longitude]}
                    icon = {
                      iconPoint(risk.risk.toLocaleLowerCase())
                    }>
                      <Popup>
                      <strong>Local:</strong> {risk.local}
                        <br/>
                        <strong>Risco: </strong>{risk.risk.toUpperCase()}
                      </Popup>
                    </Marker>
                  )
                )
                :(
                  <Marker position={[-19.9419331, -44.262343]}/>
                )
              }
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
              <span>Moradores do Citrolândia, em Betim, ganharão bacia de detenção</span>
              <p>Estrutura às margens da 381 terá capacidade para reter 95 milhões de litros de água.</p>
              <a href="https://www.otempo.com.br/o-tempo-betim/moradores-do-citrolandia-em-betim-ganharao-bacia-de-detencao-1.2348238">Ler mais</a>
            </div>
            <div className="news">
              <span>Covid-19: Betim prorroga novamente o reinício das aulas presenciais</span>
              <p>Pelo decreto municipal, as escolas e os centros infantis municipais, fechados desde o dia 18 de março, ficariam sem aulas até o dia 30 de junho; data da suspensão pode ser mais uma vez estendida.</p>
              <a href="https://www.otempo.com.br/o-tempo-betim/betim-investe-em-melhorias-na-sinalizacao-de-transito-do-hipercentro-1.2346048">Ler mais</a>
            </div>
            <div className="news">
              <span>Betim investe em melhorias na sinalização de trânsito do hipercentro</span>
              <p>Vias receberão instalação de placas e troca de semáforos; ondulações na avenida Amazonas serão retiradas.</p>
              <a href="https://www.otempo.com.br/o-tempo-betim/betim-investe-em-melhorias-na-sinalizacao-de-transito-do-hipercentro-1.2346048">Ler mais</a>
            </div>
          </div>
        </News>
      </main>
      <Footer />
    </>
  );
}

export default Home;
