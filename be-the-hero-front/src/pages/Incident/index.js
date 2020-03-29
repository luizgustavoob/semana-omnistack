import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Incident() {
  const ongId = localStorage.getItem('ongId');
  
  const params = useParams();
  const history = useHistory();
  
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (params.id) {
      api.get(`incidents/${params.id}`, {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setId(response.data.id);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setValue(response.data.value);
      })
    }
  }, [params])

  function handleSave(event) {
    event.preventDefault();

    const data = {title, description, value};

    if (id) {      
      api.put(`incidents/${id}`, data, {
        headers: {
          Authorization: ongId
        }
      })
      .then(() => successPostOrPut())
      .catch((err) => catchErrorPostOrPut(err));
    } else {
      api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      .then(() => _successPostOrPut())
      .catch((err) => _catchErrorPostOrPut(err));
    }        
  }

  function _successPostOrPut() {
    toast.success('Caso salvo com sucesso.');
    history.push('/profile');
  }

  function _catchErrorPostOrPut(err) {
    console.log('Erro ao cadastrar o caso', err);
    toast.error('Erro ao cadastrar o caso. Tente novamente.');
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"></img>

          <h1>Cadastrar caso</h1>
          <p>Descreva o caso detalhadamente e encontre um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        
        <form onSubmit={handleSave}>
          <input type="text" placeholder="Título do caso"
            value={title} onChange={e => setTitle(e.target.value)}/>
          <textarea placeholder="Descrição"
            value={description} onChange={e => setDescription(e.target.value)}></textarea>    
          <input type="text" placeholder="Valor em Reais"
            value={value} onChange={e => setValue(e.target.value)}/>

          <button className="button" type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}