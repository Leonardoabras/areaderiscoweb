import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAuth } from '../../hooks/AuthContext';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { GoBack, MapSection, FormSection } from './styles';
import { useHistory } from 'react-router-dom';
import { LeafletMouseEvent } from 'leaflet';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

interface IData {
  latitude: number;
  longitude: number;
  local: string;
  risk: '0' | 'risco' | 'desastre' | 'chuva' | string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const {user, token} = useAuth();

  const [formData, setFormData] = useState<IData>({
    latitude: 0,
    longitude: 0,
    local: '',
    risk: '0',
  });

  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if(!user){
      history.push('/login');
    }
  }, [user, history])

  const handleDataInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if(formData.latitude === 0 || formData.longitude === 0){
      alert('Coordenadas inválidas.');
      return;
    }

    if(formData.local === ''){
      alert('Localização inválida.');
      return;
    }

    if(formData.risk === '0'){
      alert('Selecione um tipo de risco.');
      return;
    }

    const res = await api.post('/location', formData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if(res.status === 200) {
      alert('Risco cadastrado com sucesso.');
      history.push('/');
    }
    else {
      alert('Failed on data validation.');
    }
  };

  const handleMapClick = (event: LeafletMouseEvent) => {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
    setFormData({ ...formData, latitude: event.latlng.lat, longitude: event.latlng.lng });
  }

  const handleRiskSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, risk: event.target.value });
  }

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
            <h1>Registrar nova Área de Risco</h1>
          </div>
          <MapSection>
            <div className="map-container">
              <Map
                center={[-19.9419331, -44.262343]}
                style={{
                  width: '100%',
                  height: '100%'
                }}
                onclick={handleMapClick}
                zoom={12}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                <Marker position={selectedPosition}/>
              </Map>
            </div>
          </MapSection>
          <form onSubmit={handleSubmit}>
            <div className="fieldGroup">

              <div className="fieldItem">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleDataInput}
                />
              </div>

              <div className="fieldItem">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleDataInput}
                />
              </div>

              <div className="fieldItem">
                <label htmlFor="local">Localização</label>
                <input
                  type="text"
                  name="local"
                  value={formData.local}
                  onChange={handleDataInput}
                />
              </div>

              <div className="fieldItem">
                <select onChange={handleRiskSelect}>
                  <option value="0">Selecione o Tipo de Risco</option>
                  <option value="risco">Risco</option>
                  <option value="desastre">Desastre</option>
                  <option value="chuva">Chuva</option>
                </select>
              </div>

              <button type="submit">Enviar</button>
            </div>
          </form>
        </FormSection>
      </main>
      <Footer />
    </>
  );
};

export default Login;
