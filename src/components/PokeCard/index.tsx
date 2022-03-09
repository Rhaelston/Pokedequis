import {PokeCardC} from './styles'

export type pokeProps ={
    name: string;
    sprites:{
        front_default: string;
        other:
        {dream_world: {
            front_default: string;
        }}
    };
    id: number;
    key: number;
    onClick: () => void;
    types?: TypeProps[];
}
type TypeProps = {
    type: {
        name: string;
    }
}

export function PokeCard(props: pokeProps){
    return(
        <PokeCardC onClick={props.onClick}>
        <span>{props.id}</span>
        <img src={props.sprites.front_default} alt={props.name}/>
        <p>{props.name}</p>
        </PokeCardC>
    )
}