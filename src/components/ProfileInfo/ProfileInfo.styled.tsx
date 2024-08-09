import styled from "styled-components";


export const Wrapper = styled.div`
    display:flex;
    margin: 60px 0;
    text-align: center;
    justify-content: center;
`

export const Text = styled.p`
    color: blue;
    font-size: 16px;
`

export const Title = styled.h1`
    color: blue;
    font-size: 25px;
    font-weight: 600;
`


export const Form = styled.form`
    display: flex;
    width: 500px;
    justify-content: center;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 30px;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

`

export const Img = styled.img`
    height: 450px;
    margin-left: 15px;
`