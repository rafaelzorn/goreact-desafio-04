import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;

export const Product = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    align-items: center;
    text-decoration: none;
    border: 1px solid #eee;
    border-radius: 4px;

    &:hover {
        transition: 0.5s;
        box-shadow: 0 2px 5px 0 #bfbfbf;
    }

    img {
        margin-bottom: 15px;
        width: 180px;
        height: auto;
    }

    .name {
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 15px;
        color: #000;
    }

    .brand {
        margin-bottom: 15px;
        font-size: 12px;
        color: #ccc;
    }

    .price {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 22px;
        color: #37bea9;
    }
`;
