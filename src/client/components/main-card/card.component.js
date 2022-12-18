// i need to refactor this code and divide it to be more smaller
// 1- create component for image 2- create image for ability
// 3 ican use go back for more details 
import "./card.styles.css"
import useFetch from '../../helper/useFetch';

export default function Card({ pokemonName, url, children }) {
    const { data: response, error, loading } = useFetch(url)
    return (
        <>
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading ...</h1>}
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
                    {children}
                </div>
            }
        </>

    )
}