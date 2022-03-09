import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";
import Icon  from "../assets/icon.png"

type navbarProps = {
    onSearch: (searchTerm:string) => void
    onFilter: (type:string) => void
}

type buttonTypesProps = {
    name: string
}

export function NavBar ({onSearch, onFilter}: navbarProps){
    const [filter, setFilter] = useState(false)
    const [buttons, setButtons] = useState<buttonTypesProps[]>([])

    const buttonsType =async () => {
      const response = await api.get('type')
        if(response.status === 200){
            setButtons(response.data.results)
        }
    }
    useEffect(()=>{
        buttonsType()
    }, [])



return (
    <Container>
        <input type="text" placeholder='Search...' onChange={event => onSearch(event.target.value)}/>
        <button onClick={()=>{
            setFilter(!filter)
        }}
        className='filterBy'
        >
            Filtrar por tipo
        </button>
        <nav 
        className={`navbar ${filter ? "active" : "inactive"}`}
        >
        {buttons?.map((button)=>(
            <button onClick={()=>onFilter(button.name)}
            key={button.name}
            className={button.name}
            >
                {button.name}
            </button>
        )
        )}
       
        </nav>
        <button
        onClick={()=>(
            onFilter('all')
        )}
        className={'buttonAll'}
        ><img src={Icon} alt="all" className='imageButton'/><h1>Pokedequis</h1></button>
        </Container>
    )
}