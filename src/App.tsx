import React from 'react';
import './App.css';

import { BrowserRouter  , Routes, Route } from 'react-router-dom'
import PokemonPage from './client/pages/pokemons-page/Pokemons.page';
import SinglePokemonPage from './client/pages/single-pokemon-page/SinglePokemon.page';
function App() {
  return (
    <div>
      <BrowserRouter basename='/pokemon'>
        <Routes>
          <Route  path="/"  element={<PokemonPage />} />
          <Route path="/pokemon/:name" element={<SinglePokemonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
