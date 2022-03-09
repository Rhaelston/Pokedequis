import styled from "styled-components";

export const Container = styled.div`
    background-color: #bf0404;
    width: 40vw;
    height: 100vh;
    padding-left: 30px;
    
    position: relative;
    display: inline-block;
    overflow-x: hidden;
    overflow-y: scroll;

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
    
    .prevNextButton1 {
        height: 2vw;
        width: 2vw;
        padding: 0.4vw;
        display: inline-block;
        position: relative;
        margin-left:14.5vw;
        margin-right:-13vw ;
        transition: filter 0.3s;
        &:hover {
        filter:brightness(0.82);
        }
        cursor: pointer;
    }
    .prevNextButton2{
        height: 2vw;
        width: 2vw;
        padding: 0.4vw;
        display: inline-block;
        position: relative;
        margin-left:15vw;
        transition: filter 0.3s;
        &:hover {
        filter:brightness(0.82);
        }
        cursor: pointer;
    }
`
