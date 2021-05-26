import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 14rem;
    height: 18rem;
    background-color: rgba(14, 26, 196, 0.3);
    border-radius: 1rem;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: #dbd9ff;
    font-weight: bold;
    transition: 0.5s;
    
    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        opacity: 0.5;
        margin: 0 auto;
        padding: 1rem;
        transition: 0.5s;
    }

    :hover {
        background-color: rgba(14, 26, 196, 0.6);
        color: #ffffff;
        box-shadow: -0.1rem 0.1rem 0.7rem 0.1rem rgba(46, 46, 46, 0.5);
        transition: 0.5s;

        img {
            border-radius: 30%;
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