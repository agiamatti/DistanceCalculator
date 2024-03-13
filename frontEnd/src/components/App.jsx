import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import CalculatorPage from './CalculatorPage';
import HistoryPage from './HistoryPage';
import Header from "./Header";

function App() {

  return (
    <>
      <Header />
      <div className='page-element-card'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CalculatorPage />} />
            <Route path='/distance' element={<CalculatorPage />} />
            <Route path='/history' element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
