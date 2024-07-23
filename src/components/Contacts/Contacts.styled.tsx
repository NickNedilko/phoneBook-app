import styled from "styled-components"
import { FaGithub, FaLinkedin, FaMobileAlt, FaTelegram } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";



export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
        gap: 20px;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 1200px) {
        gap: 30px;
        margin-bottom: 30px;
    }

`

export const Github = styled(FaGithub)`
   width: 30px;
    height: 30px;
    fill: #fff;
    cursor: pointer;

    &:hover,
    &:focus {
        fill: var(--hover-color)
    }
`

 export const LinkedIn = styled(FaLinkedin)`
   width: 30px;
    height: 30px;
    fill: #fff;
    cursor: pointer;

    &:hover,
    &:focus {
        fill: var(--hover-color)
    }
`

 export const Mobile = styled(FaMobileAlt)`
   width: 30px;
    height: 30px;
    fill: #fff;
    cursor: pointer;

    &:hover,
    &:focus {
        fill: var(--hover-color)
    }
`
export const Telegram = styled(FaTelegram)`
   width: 30px;
    height: 30px;
    fill: #fff;
    cursor: pointer;

    &:hover,
    &:focus {
        fill: var(--hover-color)
    }
`
export const Email = styled(MdMarkEmailRead)`
   width: 30px;
    height: 30px;
    fill: #fff;
    cursor: pointer;

    &:hover,
    &:focus {
        fill: var(--hover-color)
    }
`