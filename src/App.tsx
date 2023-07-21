import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.scss';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <h1>Hello</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
