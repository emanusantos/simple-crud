import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #291720;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em;
`;

export const Input = styled.input`
    width: 20em;
    height: 2em;
    font-size: 1.2em;
    padding-left: .8em;
    margin: .3em;
    border: .2em solid #fff;
    border-radius: .5em;
    outline: none;

    &::placeholder {
        font-style: italic;
    }
`;

export const Button = styled.button`
    width: 20em;
    height: 3em;
    background-color: #86626E;
    color: #fff;
    margin-top: 1em;
    font-style: italic;
    border-radius: .5em;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

export const Line = styled.hr`
    color: #fff;
    width: 100%;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2em;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    width: 30em;
    background-color: #86626E;
    border-radius: .5em;
    box-shadow: 0em .15em 1.2em #26395338;
    margin-top: 2em;
    padding: 1em;
`;

export const Title = styled.h2`
    color: #fff;
    font-family: sans-serif;
    font-style: bold;
    `;


export const Text = styled.p`
    color: #fff;
    font-family: sans-serif;
`;

