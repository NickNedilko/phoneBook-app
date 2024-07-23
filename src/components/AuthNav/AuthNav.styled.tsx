import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    
`;



export const List = styled.ul`
    display: flex;
    gap: 20px;
    padding: 20px 0;

    @media screen and (min-width: 768px) {
        gap: 30px;
    }
`

export const StyledLink = styled(NavLink)`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
    color: var(--text-header);

    &.active {
        color: var(--hover-color);
    }
    &:hover,
    &:focus {
        outline: none;
    }

    &::after {
        position: absolute;
        display: block;
        content: '';
        bottom: -2;
        left: 50%;
        width: 0;
        height: 2px;
        background: currentColor;   
        transition: width 0.3s ease 0s, left 0.3s ease 0s; 
    }

    &:hover:after,
    &:focus:after {
        width: 100%; 
        left: 0; 
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`