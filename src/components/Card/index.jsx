import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 13rem;
    height: 17rem;
    background-color: rgba(14, 26, 196, 0.3);
    border-radius: 1rem;
    margin: 0 1rem;
    font-size: 1rem;
    color: #ffffffae;
    font-weight: bold;
    transition: 0.5s;
    
    img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        opacity: 0.5;
        margin: 1rem auto;
        transition: 0.5s;
    }

    :hover {
        width: 14rem;
        height: 18rem;
        border-radius: 1.5rem;
        background-color: rgba(14, 26, 196, 0.6);
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: bolder;
        box-shadow: -0.1rem 0.1rem 0.7rem 0.1rem rgba(46, 46, 46, 0.5);
        text-shadow: -2px 2px 2px rgb(46, 46, 46);
        transition: 0.5s;

        img {
            width: 10rem;
            height: 10rem;
            border-radius: 20%;
            box-shadow: -0.3rem 0.3rem 0.7rem 0.1rem rgba(46, 46, 46, 0.5);
            opacity: 1;
            transition: 0.5s;
        }
    }

`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;