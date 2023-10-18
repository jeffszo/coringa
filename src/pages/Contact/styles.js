import styled from "styled-components";
import {BsVoicemail} from 'react-icons/bs'
import {SiMinutemailer} from 'react-icons/si'

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12rem 2rem;
`

export const TitleContact = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
    margin: 0;

`

export const ContainerIcons = styled.div`
    display: flex;
    gap: 1rem;
`

export const IconVoiceEmail = styled(BsVoicemail)`
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
`

export const IconSendEmail = styled(SiMinutemailer)`
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
`