import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Biologia, Login, ListOfSubjects, Chemia } from './pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path='/biologia' element={<Biologia />} />
          <Route path='/listOfSubjects' element={<ListOfSubjects />} />
          <Route path='/chemia' element={<Chemia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;