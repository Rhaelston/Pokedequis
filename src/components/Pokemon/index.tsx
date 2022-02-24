import { Container } from "./styles";

type statusProps = {
    sprites:{
        other:
        {dream_world: {
            front_default: string;
        }}
    };
    id: string;
};

export function Pokemon(props: statusProps){
    return(
    <Container>
        <img src={props?.sprites?.other?.dream_world?.front_default} alt={props?.id}/>
        <span>{props?.id}</span>
    </Container>
    )
}