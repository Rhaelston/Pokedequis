import { useEffect, useState } from "react";
import { NavBar } from "../../NavBar";
import { PokeCard, pokeProps } from "../PokeCard";
import { Container } from "./styles";   
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type pokeListProps = {
  pokemons:pokeProps[];
  onSelect:(selectedPokemon:pokeProps) => void;
  onPrevious: () => void;
  onNext: () => void;
  previousUrl?: string | null;
  nextUrl?: string | null;
}


export function PokeList({ pokemons , onSelect, onPrevious, onNext, previousUrl, nextUrl }: pokeListProps) {
  const [pokelist, setPokelist] = useState<pokeProps[]>([])

  function handlePokemon(selectedPokemon:pokeProps){
    onSelect(selectedPokemon)
  };
  
  function handleShearch(searchTerm:string){
    setPokelist(() => {
      const updateList = pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
      return updateList
    })
  };

  async function handleFilter(filter: string){
  if (filter === 'all') return setPokelist(pokemons)
    
    setPokelist(()=>{
      const updateList= pokemons.map(pokemon => {
        if(pokemon?.types?.find((poketype)=>
          poketype.type.name.toLowerCase() === filter.toLowerCase()
        )){
          return pokemon
        }
          return false;
      }).filter(Boolean)
      return updateList as pokeProps[]
    })
  };


useEffect(() =>{
  if(pokemons){
    setPokelist(pokemons)
  }
}, [pokemons])


return (
  <>
  <Container>
    <NavBar
      onSearch={handleShearch}
      onFilter={handleFilter}
    />
    
    {pokelist.map((pokemon) => (
      <PokeCard
        key={pokemon.id}
        name={pokemon.name}
        sprites={pokemon.sprites}
        id={pokemon.id}
        onClick={() => handlePokemon(pokemon)} />))
    }

    {previousUrl && <button className="prevNextButton1" onClick={onPrevious}><AiOutlineArrowLeft/></button>}
    {nextUrl && <button className="prevNextButton2" onClick={onNext}> <AiOutlineArrowRight/> </button>}
  </Container>
  </>
) 
 }