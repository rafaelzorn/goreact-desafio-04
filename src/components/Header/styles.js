import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    padding-top: 50px;
    margin-bottom: 20px;

    h1 {
        color: #ff9696;
        font-size: 32px;
        font-weight: 800;
    }

    .cart {
        flex: 1;
        position: relative;
        top: 3px;
        text-align: right;
        align-self: center;

        a {
            text-decoration: none;
            color: #757575;
            opacity: 0.8;

            &:hover {
                opacity: 1;
                transition: 0.5s;
            }
        }
    }
`;

export const Categories = styled.div`
    display: flex;
    padding: 15px 30px;
    background: #ff9696;
    border-radius: 3px;
    margin-bottom: 20px;

    ul > li {
        padding-right: 10px;
        display: inline-block;

        a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            font-weight: 700;
            opacity: 0.7;

            &:hover {
                transition: 0.5s;
                opacity: 1;
            }
        }
    }
`;
