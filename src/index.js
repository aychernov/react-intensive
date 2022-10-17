import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/HomeScreen/Home';
import { Modal } from './components/Modal';
import './index.css';
import App from './App';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<App />} />
      <Route path='/modal' element={<Modal />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);


