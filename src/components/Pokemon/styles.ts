import styled from "styled-components";

export const Container = styled.div`
    right: 0;
    top: 0;
    float: right ;
    display: block;
    height: 50vw;
    width: 45vw;
    background-color: #ffffff;
    padding: auto;
    img{
        display: block;
        position: relative;
        width: 17vw;
        height: 17vw;
        margin: auto;
    }
    .imgBackground{
        position: relative;
        margin: auto;  
        margin-top: 2vw;
        margin-bottom: 1.3vw;
        width: 37vw;
        height: 23vw;
        border-radius:0.5vw;
        padding-top:4vw;
        background: url(https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png);
        background-size: 110%;
    }
    .essentials{
        width:25vw ;
        margin: auto;
        position: relative;
        padding: auto;
    }
    .basestatus{
        margin: auto; 
        margin-top: 2vw;
        width:12vw;
        height:13vw;
        border-radius: 0.3vwvw;
        border: 1px solid black ;
        p{
            font-size: 1.2vw;
            font-weight: bold;
            font-family: "Helvetica", "Helvetica Neue", sans-serif;
        }
        
        h2{
            font-size: 2vw;
            font-family: "Helvetica", "Helvetica Neue", sans-serif;
        }
    }
    .hp{
        color: #2abd7b;
    }
    .attack{
        color: #e66d3e;
    }
    .defense{
        color:#175ed1;
    }
    .special-attack{
        color:#ff73c2;
    }
    .special-defense{
        color:#782abd;
    }
    .speed{
        color:#a8a8a8;
    }
`

