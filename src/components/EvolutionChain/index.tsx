import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { PokeCard, pokeProps } from "../PokeCard";
import { Container } from "./styles";

type selectedChainProps = {
    onClick: (pokeEvolv:pokeProps)=>void;
    id: number;
}



export function EvolutionChain(selectedPokemon:selectedChainProps){
    const [evolvUrl, setEvolvUrl] = useState('')
    const [toEvolveCard, setToEvolveCard] = useState<pokeProps[]>([])

    const getEvolutions = useCallback( async(evolv: any)=>{
        setToEvolveCard([])
        let evolutions:any = []
         evolv.forEach((evolution:any) => {
            if (evolution?.name){          
                evolutions.push(evolution.name)
            }

            if (evolution?.species?.name){          
                evolutions.push(evolution.species.name)
            }

            if(evolution.evolves_to){
                getEvolutions(evolution.evolves_to)
            }
        })
        
        evolutions?.forEach((pokemon:string) =>{
            api.get(`pokemon/${pokemon}`)
            .then(response=> setToEvolveCard(currentPokemonsEvolv => [...currentPokemonsEvolv, response.data]))
        })
    }, [])
    
    
    
    const getEvolvUrl =  useCallback(async ()=> {
        const response = await api.get(`pokemon-species/${selectedPokemon?.id}`)
        setEvolvUrl(response?.data?.evolution_chain?.url)
        const data = await axios.get(evolvUrl)
        
        await getEvolutions([data?.data?.chain?.species, ...data?.data?.chain?.evolves_to])

     }, [selectedPokemon?.id, evolvUrl, getEvolutions])

     


    useEffect(()=>{
        getEvolvUrl() 
    },[getEvolvUrl])


return(
    <Container>
        {toEvolveCard.map((pokeEvolv)=>(
            <PokeCard
                id={pokeEvolv.id}
                name={pokeEvolv.name}
                key={pokeEvolv.id}
                sprites={pokeEvolv.sprites}
                onClick={()=>{selectedPokemon.onClick(pokeEvolv)}}
            />
         ))}
        </Container>
    )
}