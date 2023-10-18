import styled from "styled-components";
import { BiPlay, BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'

export const IconPlay = styled(BiPlay)`
    font-size: 1.6rem;
`

export const IconInsta = styled(BiLogoInstagram)`
    font-size: 1.6rem;
    cursor: pointer;
    color: #fff;
    &:hover{
        opacity: 0.6;
    }
`


export const IconFace = styled(BiLogoFacebook)`
    font-size: 1.6rem;
    cursor: pointer;
    color: #fff;
    &:hover{
        opacity: 0.6;
    }
`


export const IconTwitter = styled(BiLogoTwitter)`
    font-size: 1.6rem;
    cursor: pointer;
    color: #fff;
    &:hover{
        opacity: 0.6;
    }
`



export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10rem 0 0 2rem;

`

export const Title = styled.p`
    font-size: 1.1rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0.7;
    margin: 0;
`
export const ContainerDescIcon = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const ContainerRedes = styled.div`
    display: flex;
    margin: 5rem 0;
    gap: 2rem;

`

export const Describe = styled.p`
  font-weight: 600;
  font-size: 5rem;
  line-height: 1;
  text-transform: uppercase;
  margin: 0;
  color: #fff;
`

export const ContainerButton = styled.div`
    display: flex;
    margin: 1rem 0 0 0;
    gap: 2rem;
`

export const Button = styled.button`
    background-color: ${props => props.bg ? '#000' : 'white'};
    width: 180px;
    height: 2.6rem;
    border-radius: 7px;
    cursor: pointer;
    border: none;
    color: ${props => props.textDark ? 'dark' : 'white'};
    text-transform: uppercase;
    font-family: 'Secular One', sans-serif;
    font-size: 1rem;
    font-weight: ${props => props.weight ? '200' : '800'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.2s;
    &:hover{
        opacity: 0.6;
        transition: all ease 0.2s;
    }
`