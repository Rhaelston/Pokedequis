import { PokeCard, pokeProps } from "../PokeCard";
import { Container } from "./styles";   

type pokeListProps = {
  pokemons:pokeProps[];
  onSelect:(selectedPokemon:pokeProps) => void;
}

export function PokeList({ pokemons , onSelect}: pokeListProps) {

  function handlePokemon(selectedPokemon:pokeProps){
    onSelect(selectedPokemon)
  }
  console.log(pokemons)
return (
  <Container>
      {pokemons.map((pokemon) =>(
       <PokeCard
        key={pokemon.id}
        name={pokemon.name}
        sprites={pokemon.sprites}
        id={pokemon.id}
        onClick={()=>handlePokemon(pokemon)}
      />))
      }
  </Container>
) 
 }