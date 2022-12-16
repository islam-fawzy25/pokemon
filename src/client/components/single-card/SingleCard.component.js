// this is container not component 
import React, {  useState } from 'react';
import "./Single-card.css"
import { useParams } from "react-router-dom";
import DropDown from '../dropDown/DropDown.component';
import useFetch from '../../helper/useFetch';

export default function SingleCard() {

    const param = useParams()
    const [abilitiesVisible, setAbilitiesVisible] = useState(false)
    const [formsVisible, setFormsVisible] = useState(false)
    const [typesVisible, setTypesVisible] = useState(false)
    const [gameIndicesVisible, setGameIndicesVisible] = useState(false)
    const [statsVisible, setStatsVisible] = useState(false)
    const [movesVisible, setMovesVisible] = useState(false)

    const { data: response, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${param.name}`)

    return (
        <>
            {error && <h1>Error</h1>}
            {response &&
                <div className='singl-card-container'>
                    <div className='singl-card-image-container'>
                        <img src={response.sprites.front_shiny} alt={response.name} />
                    </div>
                    <h3>{response.name}</h3>
                    <div className='singl-card-details-container'>
                        <div className='singl-card-details'>
                            <p>Height: {response.height}</p>
                            <p>Weight: {response.weight}</p>
                            <p>Base experience: {response.base_experience}</p>
                            <p>Default: {String(response.is_default)}</p>
                            <p>Order: {response.order}</p>
                        </div>
                        <div className='dropdwon-container'>
                            <div>
                                <DropDown
                                    visible={abilitiesVisible}
                                    onClick={() => { setAbilitiesVisible(!abilitiesVisible) }}
                                    title="Abilities"
                                >
                                    {response.abilities.map(pokemon => (
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
                                    {response.forms.map(pokemon => (
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
                                    {response.types.map(pokemon => (
                                        <div key={pokemon.slot}>
                                            <li>Slot: {pokemon.slot}</li>
                                        </div>
                                    ))}
                                    {response.types.map(pokemon => (
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
                                    {response.game_indices.map(pokemon => (
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
                                    {response.stats.map(pokemon => (
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
                                    {response.moves.map(pokemon => (
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
                    </div>
                </div>
            }
        </>
    )
}