import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    .box-error {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: #ff3a3a;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        border-radius: 3px;

        > button {
            border: none;
            background: none;
            font-weight: bold;
            cursor: pointer;
            color: #fff;
        }
    }
`;