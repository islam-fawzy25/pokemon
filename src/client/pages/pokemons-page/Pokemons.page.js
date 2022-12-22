// i will creat pagination component not use ui
import React, { useEffect, useState } from "react";
import "./pokemons-page.styles.css"
import { fetchDb } from "../../helper/fetchMethod";
import Card from "../../components/main-card/card.component";
import SelectNumberOfPages from "../../components/select-bar/SelectBar.component";
import Sort from "../../components/sort-bar/Sort.component";
import SearchBar from "../../components/search-bar/search.component";
import GenericButton from "../../components/genericButton/GenericButton.component";
import { useNavigate } from 'react-router-dom';

export default function PokemonPage() {
    const [pokemonsData, setPokemonsData] = useState()
    const [pokemonsDataError, setPokemonsDataError] = useState(false)
    const [pokemonsDataLoading, setPokemonsDataLoading] = useState(false)
    //Select bar stats +  // Pagination
    const [pokemonsPerPage, setPokemonsPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)
    const [numberOfPokemons, setNumberOfPokemons] = useState(400) // for a new feature * user can choose total of pokemons 
    const pokemonPerPgae = pokemonsPerPage
    const pagesVisited = pageNumber * pokemonPerPgae
    const pageCount = Math.ceil(numberOfPokemons / pokemonPerPgae)
    const changePage = ({ selected }) => { setPageNumber(selected) }
    //Sort 
    const [sortDescending, setSortDescending] = useState(false)
    const [sortReverse, setSortReverse] = useState(false)
    // Search bar
    const [displaySearch, setDisplaySearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                setPokemonsDataLoading(true)
                const { data: pokemonData, error } = await fetchDb(`https://pokeapi.co/api/v2/pokemon?offset=40&limit=${numberOfPokemons}`)
                error ? setPokemonsDataError(error) : setPokemonsDataLoading(true)
                const pokemonsNames = await pokemonData.results.map(pokemon => pokemon.name)
                sortReverse ? setPokemonsData(pokemonsNames.sort((a, b) => { return b.localeCompare(a) })) : setPokemonsData(pokemonsNames)
                sortDescending ? setPokemonsData(pokemonsNames.sort((a, b) => { return a.localeCompare(b) })) : setPokemonsData(pokemonsNames)
                displaySearch ? setPokemonsData(pokemonsNames.filter((pokemon) => pokemon.includes(searchValue))) : setPokemonsData(pokemonsNames)
                setPokemonsDataLoading(false)
            } catch (error) {
                setPokemonsDataLoading(false)
                setPokemonsDataError(true)
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortReverse, sortDescending, displaySearch, searchValue])
    return (
        <div className="pokemon-page-container">
            <nav className="nav-bar">
                <div>
                    <SelectNumberOfPages setvalue={setPokemonsPerPage} />
                </div>
                <div>
                    <SearchBar
                        setDisplaySearch={setDisplaySearch}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>
                <div>
                    <Sort
                        setSortDescending={setSortDescending}
                        setSortReverse={setSortReverse}
                    />
                </div>
            </nav>
            <main>
                {pokemonsDataLoading && <h1>Loading ...</h1>}
                {pokemonsDataError && <h1>Error!</h1>}
                {pokemonsData &&
                    pokemonsData.slice(pagesVisited, pagesVisited + pokemonPerPgae)
                        .map((pokemon) => (
                            <div key={pokemon}>
                                <Card pokemonName={pokemon}
                                    url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} >
                                    <GenericButton
                                        handleOnClick={() => { navigate(`/pokemon/${pokemon}`) }}
                                        buttonLable={`See Details `}
                                        className={"see-details-button"}
                                    />
                                </Card>
                            </div>
                        ))}
            </main>
        </div>
    )
}

