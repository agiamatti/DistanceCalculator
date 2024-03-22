import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import CalculatorPage from './pages/CalculatorPage';
import HistoryPage from './pages/HistoryPage';
import Header from './mainPage/Header';
import { PAGES } from '../utils/constants';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='page-element-card'>
        <Routes>
          <Route path='/' element={<CalculatorPage />} />
          <Route path={PAGES.distance.link} element={<CalculatorPage />} />
          <Route path={PAGES.history.link} element={<HistoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
