import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Routes from '../../routes';
import { StyledMain, Container } from './styles';

const Main = () => (
    <BrowserRouter>
        <StyledMain>
            <Container>
                <Header />

                <Routes />
            </Container>
        </StyledMain>
    </BrowserRouter>
);

export default Main;
