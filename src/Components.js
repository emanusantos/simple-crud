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
`;

export const Input = styled.input`
    width: 20em;
    height: 2em;
    font-size: 1.2em;
    padding-left: .8em;
    margin: .3em;
`;

export const Button = styled.button`
    width: 20em;
    height: 3em;
    margin-top: 1em;

    &:hover {
        cursor: pointer;
    }
`;


