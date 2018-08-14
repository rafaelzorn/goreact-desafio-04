import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #ff4949;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 3px;
    color: #fff;

    > p {
        flex: 1;
    }

    > div {
        flex: 1;

        button {
            float: right;
            border: none;
            background: none;
            font-weight: bold;
            cursor: pointer;
        }
    }
`;
