
import './App.css'
import LandingPage from './components/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokedexHero from './components/PokedexHero';
import PokemonPage from './components/PokemonPage';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />} />
        <Route path='/pokemon' element={<PokedexHero />} />
        <Route path='/pokemon/:id' element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
