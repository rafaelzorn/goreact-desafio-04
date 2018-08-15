import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
`;

export const ContainerSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 15px;

    .title {
        color: #ff9696;
        font-weight: 800;
        user-select: none;
        font-size: 40px;
    }
`;

export const Cart = styled(Link)`
    color: #bdc3c7;
    user-select: none;
    text-decoration: none;
    font-size: 15px;
    &:hover {
        transition: 0.5s;
        color: #7a7a7a;
    }
`;

export const Categories = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 35px;
    background: #ff9696;
    border-radius: 3px;
    color: #fff;
    width: 100%;
`;

export const Menu = styled(Link)`
    color: #fff;
    margin-right: 20px;
    text-decoration: none;
    font-weight: 600;
    opacity: 0.8;
    text-transform: uppercase;

    &.home {
        background: #f66;
        padding: 5px 10px;
        border-radius: 5px;
    }

    &:hover {
        transition: 0.5s;
        opacity: 1;
    }
`;
