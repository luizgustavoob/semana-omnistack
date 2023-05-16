import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import './styles.css';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  //semelhante ao setState em componentes de classe
  const [incidents, setIncidents] = useState([]);

  // executa a função de callback sempre que algo no componente mudar
  // (nesse caso, sempre que a ongId mudar e no primeiro carregamento)
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => setIncidents(response.data))
  }, [ongId]);

  const handleDeleteIncident = async (id) => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(i => i.id !== id));
      toast.success('Caso removido com sucesso.');
    } catch(err) {
      toast.error('Erro ao remover o caso. Tente novamente.');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('ongId');
    localStorage.removeItem('ongName');
    navigate('/');
  }

  const handleClickIncident = (incident) => {
    navigate(`/incidents/${incident.id}`);
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"/>
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id} onClick={() => handleClickIncident(incident)}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile