import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import { Container } from './styles/components';
import Routes from './routes';

import './styles/global';

import store from './store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Container>
                <div>
                    <Header />

                    <Routes />
                </div>
            </Container>
        </BrowserRouter>
    </Provider>
);

export default App;
