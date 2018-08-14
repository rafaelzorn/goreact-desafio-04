import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    .img {
        flex: 1;
        border: 1px solid #eee;
        text-align: center;
        padding: 25px 0 25px 0;
        border-radius: 3px;

        img {
            width: 200px;
        }
    }

    .info {
        flex: 1;
        padding: 10px 0 0 30px;

        span {
            display: block;
        }

        .name {
            font-size: 35px;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .brand {
            color: #cecece;
            font-size: 22px;
            margin-bottom: 50px;
        }

        .value {
            font-size: 35px;
            font-weight: 600;
            color: #37bea9;
            margin-bottom: 10px;
        }

        .button {
            border: none;
            background: #37bea9;
            display: block;
            text-align: center;
            padding: 15px 0 15px 0;
            text-decoration: none;
            font-weight: 600;
            color: #fff;
            border-radius: 3px;
            width: 100%;
            cursor: pointer;
            opacity: 0.8;

            &:hover {
                transition: 1s;
                opacity: 1;
            }
        }
    }
`;
