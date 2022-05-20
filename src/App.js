import React from 'react';
import * as Page from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page.Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
