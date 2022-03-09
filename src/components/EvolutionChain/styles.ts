import styled from "styled-components";

export const Container = styled.div`
background-color: red; ;
position: absolute ;
margin-left:40vw ;
margin-right:40vw ;
top:0;
width: 13.12vw ;
height: 100vh;
overflow-y: auto ;
    ::-webkit-scrollbar {
        width: 0.5vw;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #f74c40;
    }

    ::-webkit-scrollbar-thumb {
        background:#ff7369;
        border-radius: 0.2vw;
    }
    ::-webkit-scrollbar-track {
        background-color: #f4f4f4;
    }   
`