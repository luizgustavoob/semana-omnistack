import React from 'react';
import Routes from './routes';
import Header from './pages/Header';
import './global.css'

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}