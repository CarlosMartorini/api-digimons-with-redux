import styled from 'styled-components';

export const Input = styled.input`
    width: 15rem;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    background-color: #dbdbdb;
    color: #26262e;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
    border: none;
    font-size: 1rem;
    outline: none;

    :hover {
        background-color: rgba(219, 219, 219, 0.9);
    }
`;

export const Button = styled.button`
    width: 10rem;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    background-color: #26262e;
    color: #c3c3c3;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    border: none;
    font-size: 1rem;
    outline: none;

    :hover {
        background-color: rgba(38, 38, 46, 0.6);
        font-weight: bold;
    }
`;