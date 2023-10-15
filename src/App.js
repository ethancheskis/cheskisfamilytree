import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Pets from './components/Pets'
import Pictures from './components/Pictures'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/pictures' element={<Pictures />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
