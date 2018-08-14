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
    border: 1px solid #ececec;
    border-radius: 3px;
    text-decoration: none;
    color: #000;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        transition: 2s;
    }

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
        width: 180px;
    }

    .info {
        display: flex;
        flex-direction: column;
        text-align: center;

        .name {
            font-size: 14px;
            font-weiht: 600;
            margin-bottom: 5px;
        }

        .brand {
            color: #cecece;
            margin-bottom: 20px;
        }

        .value {
            font-size: 25px;
            font-weight: 600;
            color: #37bea9;
        }
    }
`;
