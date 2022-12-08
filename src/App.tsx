import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line no-useless-rename
import PokemonPage from './client/pages/pokemons-page/Pokemons.page';
import SinglePokemonPage from './client/pages/single-pokemon-page/SinglePokemon.page';
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="/pokemon/:name" element={<SinglePokemonPage />} />
      </Routes>
    </div>


  );
}

export default App;
