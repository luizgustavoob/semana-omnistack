import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident() {

  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  function handleNewIncident(event) {
    event.preventDefault();
    const data = {title, description, value};
    api.post('incidents', data, {
      headers: {
        Authorization: localStorage.getItem('ongId')
      }
    })
    .then(response => {
      alert('Caso cadastrado com sucesso.');
      history.push('/profile');
    })
    .catch(err => alert('Não foi possível cadastrar o caso.'));
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"></img>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente e encontre um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        
        <form onSubmit={handleNewIncident}>
          <input type="text" placeholder="Título do caso"
            value={title} onChange={e => setTitle(e.target.value)}/>
          <textarea placeholder="Descrição"
            value={description} onChange={e => setDescription(e.target.value)}></textarea>    
          <input type="text" placeholder="Valor em Reais"
            value={value} onChange={e => setValue(e.target.value)}/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}