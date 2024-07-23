import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledFooter = styled.footer`
    width: 100%;
    position: relative;
    bottom: 0%;
    margin-top: 20px;
    background: var(--bgd-header);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 30px;
    }

    @media screen and (min-width: 1200px) {
        padding: 40px;
    }
`;

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
const text = `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-header);
    text-decoration: none;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 18px;    
    }
`;

export const StyledLink = styled.a`
    ${text}
    text-decoration: underline; 

    &:hover {
        color: var(--hover-color);
    }
`;

export const StyledTextLink = styled(Link)`
    ${text}
    position: relative;
    
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
`

export const Text = styled.p`
    ${text}
    text-align: center;
`
