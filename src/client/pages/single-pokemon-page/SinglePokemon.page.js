import React, { useEffect, useState } from "react";
import "./single-pokemon-page.styles.css"
import SingleCard from "../../components/single-card/SingleCard.component";
import GenericButton from "../../components/genericButton/GenericButton.component";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../helper/useFetch';
import { fetchDb } from "../../helper/fetchMethod";
import { useParams } from "react-router-dom";
import DropDown from '../../components/dropDown/DropDown.component';

export default function SinglePokemonPage() {
    const navigate = useNavigate();

    const param = useParams()
    const [abilitiesVisible, setAbilitiesVisible] = useState(false)
    const [formsVisible, setFormsVisible] = useState(false)
    const [typesVisible, setTypesVisible] = useState(false)
    const [gameIndicesVisible, setGameIndicesVisible] = useState(false)
    const [statsVisible, setStatsVisible] = useState(false)
    const [movesVisible, setMovesVisible] = useState(false)
    const [pokemond, setPokemon] = useState()
    const [pokemonError, setPokemonError] = useState(false)


    const { data: pokemon, error: err, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${param.name}`)

    return (
        <div className="single-pokemon-page-container">
            <GenericButton
                handleOnClick={() => { navigate('/') }}
                buttonLable={"<< Back"}
                className={"go-back-button"}
            />
            {err&&<h1>Erro!</h1>}
            {loading&&<h1>Loading ...</h1>}
            {pokemon &&
                <SingleCard response={pokemon}>
                    <div className='dropdwon-container'>
                        <div>
                            <DropDown
                                visible={abilitiesVisible}
                                onClick={() => { setAbilitiesVisible(!abilitiesVisible) }}
                                title="Abilities"
                            >
                                {pokemon.abilities.map(pokemon => (
                                    <div key={pokemon.ability.name}>
                                        <li>{pokemon.ability.name}</li>
                                    </div>
                                ))}
                            </DropDown>
                        </div>
                        <div>
                            <DropDown
                                visible={formsVisible}
                                onClick={() => { setFormsVisible(!formsVisible) }}
                                title="Forms"
                            >
                                {pokemon.forms.map(pokemon => (
                                    <div key={pokemon.name}>
                                        <li>{pokemon.name}</li>
                                    </div>
                                ))}
                            </DropDown>
                        </div>
                        <div>
                            <DropDown
                                visible={typesVisible}
                                onClick={() => { setTypesVisible(!typesVisible) }}
                                title="Types"
                            >
                                {pokemon.types.map(pokemon => (
                                    <div key={pokemon.slot}>
                                        <li>Slot: {pokemon.slot}</li>
                                    </div>
                                ))}
                                {pokemon.types.map(pokemon => (
                                    <div key={pokemon.type.name}>
                                        <li>Name: {pokemon.type.name}</li>
                                    </div>
                                ))}
                            </DropDown>
                        </div>
                        <div>
                            <DropDown
                                visible={gameIndicesVisible}
                                onClick={() => { setGameIndicesVisible(!gameIndicesVisible) }}
                                title="Game indices"
                            >
                                {pokemon.game_indices.map(pokemon => (
                                    <div key={pokemon.version.name}>
                                        <div>
                                            <li>Game index: {pokemon.game_index}</li>
                                        </div>
                                        <div>
                                            <li>Version: {pokemon.version.name}</li>
                                        </div>
                                    </div>
                                ))}
                            </DropDown>
                        </div>
                        <div>
                            <DropDown
                                visible={statsVisible}
                                onClick={() => { setStatsVisible(!statsVisible) }}
                                title="Stats"
                            >
                                {pokemon.stats.map(pokemon => (
                                    <div key={pokemon.stat.name}>
                                        <div>
                                            <li>Name: {pokemon.stat.name}<p>Effort: {pokemon.effort}</p>  Base stat: {pokemon.base_stat}</li>
                                        </div>
                                    </div>
                                ))}
                            </DropDown>
                        </div>
                        <div>
                            <DropDown
                                visible={movesVisible}
                                onClick={() => { setMovesVisible(!movesVisible) }}
                                title="Moves"
                            >
                                {pokemon.moves.map(pokemon => (
                                    <div key={pokemon.move.name}>
                                        <div>
                                            <li>Move: {pokemon.move.name}
                                                <p></p>
                                            </li>
                                        </div>
                                    </div>
                                ))}
                            </DropDown>
                        </div>
                    </div>
                </SingleCard>
            }
        </div>
    )
}