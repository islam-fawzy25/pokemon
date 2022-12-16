// i need to refactor this code and divide it to be more smaller
// 1- create component for image 2- create image for ability
// 3 ican use go back for more details 
import React, { useEffect, useState } from 'react';
import "./card.css"
import { fetchDb } from '../../helper/fetchMethod';
import useFetch from '../../helper/useFetch';

export default function Card({ pokemonName }) {
    const [pokemonData, setPokemonData] = useState([])
    const [imageURl, setImageUrl] = useState("")
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const { data: response,error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    return (
        <>
        {error && <h1>Loading ...</h1>} 
            {response &&
                <div className='card-container'>
                    <div className='image-container'>
                        <img src={response.sprites.front_shiny} alt={pokemonName} />
                    </div>
                    <h3>{pokemonName}</h3>
                    <div className='details-container'>
                        <div>
                            <p>Height</p>
                            <p>Weight</p>
                            <p>Abiilities</p>
                        </div>
                        <div>
                            <p>{response.height}</p>
                            <p>{response.weight}</p>
                            {response.abilities.map(pokemon => (
                                <div key={pokemon.ability.name}>
                                    <p>{pokemon.ability.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='hr'>
                        <hr />
                    </div>
                    <div className='see-details'>
                        <a href={`/pokemon/${pokemonName}`}>See Details</a>
                    </div>
                </div>
            }
        </>

    )
}