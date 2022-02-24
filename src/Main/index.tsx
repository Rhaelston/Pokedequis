import { useEffect, useState, } from "react";
import { pokeProps } from "../components/PokeCard";
import { PokeList } from "../components/PokeList";
import { Pokemon } from "../components/Pokemon";
import { api } from "../services/api";
import {Container} from "./styles"

export function Main() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [pokemons, setPokemons] = useState<pokeProps[]>([])
    const [pokemonItSelf, setPokemonItSelf] = useState<pokeProps[]>([])
    const [selectedPokemon, setSelectedPokemon] = useState<any | null>([])
    
    const getPokemons = async() =>{
    const response:any = await api.get('pokemon?offset=0&limit=50')
    const fetchedPokemons = response?.data?.results
    setPokemons(fetchedPokemons)
         
    fetchedPokemons?.forEach((pokemon:pokeProps) =>{
        api.get(`pokemon/${pokemon.name}`)
        .then(response=> setPokemonItSelf(currentPokemons => [...currentPokemons, response.data]))
    })
    }

    function handleSelect(pokemon:pokeProps){
        setSelectedPokemon(pokemon)
    }

    useEffect(()=>{
        getPokemons()
    },
        []
    )
    
    return(
        <Container>
            <PokeList pokemons={pokemonItSelf} onSelect={handleSelect}/>
            {
            <Pokemon 
                sprites={selectedPokemon.sprites}
                id={selectedPokemon.id}
            />}
        </Container>
    )
}