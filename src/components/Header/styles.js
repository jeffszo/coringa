import styled from "styled-components"
import { BiSearchAlt2 } from "react-icons/bi"
import { Link } from 'react-router-dom'


export const Header = styled.header`
    display: flex;

`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;


`

export const TitleJoker = styled.h1`
    font-family: 'Yatra One', sans-serif;
    font-size: 2rem;

    

`

export const Item = styled(Link)`
    
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;
    list-style: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    margin:0 2.5rem 0 0;
    text-decoration: none;

`

export const IconSearch = styled(BiSearchAlt2)`
    font-size: 1.65rem;

`