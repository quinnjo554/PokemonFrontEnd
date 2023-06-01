
import './App.css'
import LandingPage from './components/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokedexHero from './components/PokedexHero';
import PokemonPage from './components/PokemonPage';
import WhosThatPokemon from './components/WhosThatPokemon';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />} />
        <Route path='/pokemon/:page' element={<PokedexHero />} />
        <Route path='/pokemonPage/:id' element={<PokemonPage />} />
        <Route path='/whosThatPokemon' element={<WhosThatPokemon />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
