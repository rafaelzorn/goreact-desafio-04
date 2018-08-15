import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .teste {
        font-size: 22px;
        color: #ff9696;
    }

    .total {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 40px 70px;
        div {
        display: flex;
        align-items: center;

        .text {
            text-transform: uppercase;
            font-size: 14px;
            font-weight: bold;
            color: #747d8c;
            margin-right: 10px;
        }

        .price {
            font-size: 24px;
            color: #37bea9;
            font-weight: bold;
        }
    }
`;

export const TableContainer = styled.div`
    border: 1px solid #ecf0f1;
    border-radius: 3px;
    width: 100%;
    padding: 20px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    thead th {
        font-size: 16px;
        color: #747d8c;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 0;
        padding-left: 15px;
        text-align: left;
    }

    .product {
        &:not(:last-child) {
            td {
                border-bottom: 1px solid #ecf0f1;
            }
        }

        td {
            padding-bottom: 20px;
            padding-top: 10px;
            padding-left: 15px;

            .title {
                font-size: 16px;
                font-weight: bold;
            }

            .brand {
                font-size: 14px;
                color: #747d8c;
            }

            .price {
                font-size: 22px;
                color: #37bea9;
                font-weight: bold;
            }

            input {
                width: 60px;
                border: 1px solid #eee;
                padding: 10px;
                color: #909090;
            }

            &:first-child {
                img {
                    width: 50px;
                    height: auto;
                }
            }

            &:last-child {
                text-align: right;
                button {
                    color: #747d8c;
                    font-size: 18px;
                    border: none;
                    background: transparent;
                }
            }
        }
    }
`;
