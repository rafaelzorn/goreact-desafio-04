import styled from 'styled-components';

export const Products = styled.div`
    border: 1px solid #eee;
    padding: 20px;
    margin-bottom: 30px;

    table {
        border-spacing: 0;

        thead {
            color: #b3b3b3;
            font-size: 18px;
            text-align: left;

            .img {
                width: 5%;
            }

            .product {
                width: 40%;
            }

            .value {
                width: 10%;
            }

            .quantity {
                width: 5%;
            }

            .subtotal {
                width: 10%;
            }

            .delete {
                width: 5%;
            }
        }

        tbody {

            > tr {
                background: #fff;

                &:hover {
                    background: #f9f9f9;
                }

                &:last-child {
                    > td {
                        border-bottom: none;
                    }
                }
            }

            > tr > td {
                padding: 12px 0 12px 0
                border-bottom: 1px solid #eee;
            }

            .img {
                padding-right: 15px;

                img {
                    width: 100%;
                }
            }

            .product {
                span {
                    display: block;
                }

                .name {
                    font-size: 18px;
                    font-weight: 600;
                }

                .brand {
                    color: #999;
                }
            }

            .value {
                color: #37BEA9;
                font-weight: 600;
                font-size: 22px;
            }

            .quantity {

                input {
                    width: 40px;
                    border: 1px solid #eee;
                    padding: 10px;
                    color: #909090;
                }
            }

            .subtotal {
                color: #37BEA9;
                font-weight: 600;
                font-size: 22px;
            }

            .delete {
                text-align: center;
                color: #696969;
                font-size: 22px;
                font-weight: 700;
            }
        }
    }
`;
