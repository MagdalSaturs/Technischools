import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Biologia, Login } from './pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path='/biologia' element={<Biologia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;