import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom';
import PokemonPage from './client/pages/pokemons-page/Pokemons.page';
import SinglePokemonPage from './client/pages/single-pokemon-page/SinglePokemon.page';
function App() {
  return (

    <PokemonPage />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/pokemon/" element={<PokemonPage />} />
    //     <Route path="/pokemon/:name" element={<SinglePokemonPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
