import React from 'react';
import { Container } from './styles';

const Loading = ({ message }) => (
    <Container>
        <p>
            {message} <i className="fa fa-spinner fa-pulse" />
        </p>
    </Container>
);

export default Loading;
