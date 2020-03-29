import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../../services/api';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Logon() {

  const history = useHistory();
  const [id, setId] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    api.post('sessions', {id})
      .then(response => {
        console.log(response.data.name);
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');
      })
      .catch(() => toast.error('Informe uma ID válida.'));
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID" 
            value={id} onChange={e => setId(e.target.value)}/>
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>      

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}