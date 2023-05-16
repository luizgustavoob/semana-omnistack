import React from 'react';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes';
import 'react-toastify/dist/ReactToastify.min.css';
import './global.css'

const App = () => (
  <div>
    <ToastContainer autoClose={3000}/>
    <AppRoutes />
  </div>
)

export default App