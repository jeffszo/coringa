import styled from "styled-components";
import {BsDiscord, BsSpotify, BsYoutube} from 'react-icons/bs'

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12rem 2rem;

`

export const TitleCast = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2.4rem;
    color: #fff;
    text-transform: uppercase;
    margin: 0;

`

export const SubTitleCast = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    opacity: 0.6;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
`
export const ContainerRedes = styled.div`
    display: flex;
    margin: 2rem 0 ;
    gap: 1rem;
`

export const IconSpotify = styled(BsSpotify)`
    font-size: 2rem;
    cursor: pointer;
    color: #1ed760;
    &:hover{
        opacity: 0.7;
    }
`

export const IconYoutube = styled(BsYoutube)`
    font-size: 2rem;
    cursor: pointer;
    color: #d00000;
    &:hover{
        opacity: 0.7;
    }
`

export const IconDiscord = styled(BsDiscord)`
    font-size: 2rem;
    cursor: pointer;
    color: #9d4edd;
    &:hover{
        opacity: 0.7;
    }

`