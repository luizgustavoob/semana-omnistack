import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Incident from './pages/Incident';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logon />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/incidents/new" element={<Incident />} />
      <Route path="/incidents/:id" element={<Incident />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes