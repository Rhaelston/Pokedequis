import { useEffect, useState } from "react";
import { Container } from "./styles";


type statusProps = {
    sprites:{
        other:
        {dream_world: {
            front_default: string;
        }}
    };
    id: number;
    name: string;
    weight: number;
    types: TypeProps[];
    stats: [   
        basestat: {
        base_stat?:string;
        stat:{
            name: string;
        }
    }];
};

type TypeProps = {
    type: {
        name: string;
    }
};


export function Pokemon(props: statusProps){
    const [types, setTypes] = useState <TypeProps[]>([])

    useEffect(
        ()=>{
            if(props?.types?.length !== 0 ){
            setTypes(props?.types)}
        },[props.types])
    
    return(
    <Container>
        <div className="imgBackground">
        <img
         src={props?.sprites?.other?.dream_world?.front_default} alt={props?.name}
        />
        </div>

        <div className="essentials">
        <strong>Id:{props?.id}</strong>
        <h1>Name: {props?.name}</h1>
        <p>Weight: {props?.weight}</p>
        <p>Type:{types?.length > 1 ? 
            types?.map(types => (
            `${types?.type?.name}  `)
            )
        :
        types?.length === 1 ? 
            types?.map(types => (
            `${types?.type?.name} `)
        ):

         ( <></> )
        }</p>
        </div>
        <div className="basestatus">
            <h2>BaseStatus</h2>
        {props?.stats?.map((stats) =>(
           <p className={stats?.stat?.name}>{stats?.stat.name}: {stats?.base_stat}</p>
        ))}
        </div>
    </Container>
    )
}