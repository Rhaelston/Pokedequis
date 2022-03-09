import { useEffect, useState, } from "react";
import { EvolutionChain } from "../components/EvolutionChain";
import { pokeProps } from "../components/PokeCard";
import { PokeList } from "../components/PokeList";
import { Pokemon } from "../components/Pokemon";
import { api } from "../services/api";
import {Container} from "./styles"

export function Main() {
    const [pokemons, setPokemon] = useState<pokeProps[]>([])
    const [selectedPokemon, setSelectedPokemon] = useState<any | null>([])
    
    const [previousUrl, setPreviousurl] = useState<string | null>('')
    const [nextUrl, setNextUrl] = useState<string | null>('')
    
    const getPokemons = async(url?:string | null | undefined) =>{
        const response:any = await api.get(url ||"pokemon?offset=0&limit=102")
    
        setPreviousurl(response?.data?.previous)
        setNextUrl(response?.data?.next)
    
        const fetchedPokemons = response?.data?.results
   
        fetchedPokemons?.forEach((pokemon:pokeProps) =>{
        api.get(`pokemon/${pokemon.name}`)
        .then(response=> setPokemon(currentPokemons => [...currentPokemons, response.data]))
    })

    setPokemon([])
    }

    function handleSelect(pokemon:pokeProps){
        setSelectedPokemon(pokemon)
    }

    async function handlePrevious(){
      await  getPokemons(previousUrl)
    }

    async function handleNext(){
      await  getPokemons(nextUrl)
    }

    useEffect(()=>{
        getPokemons()
    },[])
    
    return(
        <Container>
            <PokeList
              pokemons={pokemons}
              onSelect={handleSelect}
              onPrevious={handlePrevious}
              onNext={handleNext}
              previousUrl={previousUrl}
              nextUrl={nextUrl}
            />

            
            <Pokemon 
                sprites={selectedPokemon.sprites}
                id={selectedPokemon.id}
                name={selectedPokemon.name}
                weight={selectedPokemon.weight}
                types={selectedPokemon.types}
                stats={selectedPokemon.stats}
            />

            <EvolutionChain
                onClick={(pokemon) => handleSelect(pokemon)}
                id={selectedPokemon.id}
            />
        </Container>
    )
}