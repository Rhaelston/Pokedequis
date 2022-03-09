import styled from 'styled-components'

export const PokeCardC = styled.div`

    display:inline-block;
    width: 9vw;    
    background-color: #f27474;
    margin-left: 1.3vw;
    margin-right: 1.3vw;
    margin-bottom :1vw ;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    box-shadow: 0.1rem 0rem 0.2rem #8a8484;
    

    span{ 
        display : block;
        padding: auto;
        margin-left: 3.5rem;
        width:6vw ;
    }

    p{
        font-family: 'Roboto Serif', sans-serif;
        font-weight: 500px;
        margin-left: 0.8vw;
        margin-top: 0.3rem;
    }

    
    img {
        margin: 0.7vw;
        margin-left: 1vw;
        width: 7vw ;
        border: 1px solid black;
        background-color: #fce1e1;
        position: relative;
        padding: auto;
    }

    transition: filter 0.3s;
    &:hover {
            filter:brightness(0.82);
    }
`