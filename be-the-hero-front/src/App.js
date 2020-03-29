import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './global.css'

export default function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <Routes />
    </div>
  );
}