import styled from "styled-components";

export const Container = styled.div`
    width: 27vw;
    height: 17vw;
    display: block;
    border: 3px solid #4684c7;
    border-radius: 7px;
    margin-left: 4.7vw;
    margin-top: 5vw;
    margin-bottom: 5vw;
    background: #c9c340;

.navbar.inactive{
    visibility: hidden;
}
.navbar.active{
    visibility: visible;
    button{
        width:4.5vw ;
        margin: auto ;
        margin-left: 0.7vw ;
        margin-bottom:0.2vw ;
        padding: auto;
        display: inline-block;
        border: 1px solid ;
        border-radius:0.2vw;
        color: #170c0c;
        font-weight: bold ;
        transition: filter 0.3s;
        &:hover {
            filter:brightness(1.3);
        }
    }
}



button{
    margin: 0.2vw;
    margin-right: 0.8vw;
    cursor: pointer;
}

.buttonAll{
    display: block;
    width: 17vw;
    height: 5vw;
    background-color:#70808a ;
    border: 2px solid #4684c7;
    border-radius:0.2vw;
    img{
        width: 2vw ;
    }
    position: absolute;
    top: 5.3vw;
    align-items: center;
    right:10vw;
    transition: filter 0.3s;
    &:hover {
            filter:brightness(0.82);
    }
}

input{
    width: 15vw ;
    height:2vw ;
    display: block;
    margin-top: 5.7vw;
    border-radius:2px ;
    border: 1.2px solid #8c1515;
    outline-style:none;
    font-size:1.7vw ;
    margin-left:5vw;
}

.filterBy{
    width: 8vw ;
    display: inline-block;
    padding: auto;
    margin-left: 8.5vw;
    margin-top:0.6vw ;
}




.grass{
    background-color: #40f564;
 
}

.poison{
    background-color: #a532bf;
}

.ground{
    background-color:#bf6132;
}
.rock{
    background-color:#807d7d;
}
.electric{
    background-color:#cae000;
}
.fairy{
   background-color: #ea53f5;
}
.ice{
    background-color: #b2e6f7;
}
.flying{
    background-color: #eea8f7;
}
.fighting{
    background-color: #5e5138;
}
.dark{
    background-color:#1f1e1d;
}
.normal{
    background-color: #C6C6A7;
}
.fire{
    background-color: #e6934c;
}
.water{
    background-color: #3082c9;
}
.steel{
    background-color: #cccccc;
}
.unknown{
    visibility: hidden;
    position: absolute;
}
.ghost{
    background-color: #454343;
}
.shadow{
    background-color:#303030 ;
}
.bug{
    background-color:#85b349 ;
}
.psychic{
    background-color:#c268d4;
}
.dragon{
    background-color:#d14b4b;
}
`