import React,{useEffect, useState} from 'react';
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

interface Risk{
  id:number,
  latitude:number,
  longitude:number,
  risk:string,
}

const Home: React.FC = () => {
  const {user, signOut} = useAuth();
  const [myPosition, setMyPosition] = useState<[number,number]>([0,0]);
  const [risks, setRisks] = useState<Risk []>([]);


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

  const myLocation = L.icon({
    iconUrl: myLocationIcon,
    iconSize: [55,55]
  });

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
          <form>
            <input placeholder="Busque pelo seu CEP" />
            <button type="submit">Buscar</button>
          </form>
        </Search>
        <MapSection>
          <span>Informações direto no Mapa</span>
          <p>Veja no mapa abaixo se há alguma informação recente sobre sua região.</p>

          <div className="map-container">
            <Map
              center={[-19.9419331, -44.262343]}
              style={{
                width: '100%',
                height: '100%'
              }}
              zoom={12}>
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
                      <Popup> Atualizo 6666</Popup>
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
      </main>
      <Footer />
    </>
  );
}

export default Home;
