import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Error from './components/Error';
import Routes from './routes';
import Header from './components/Header';
import { Content } from './styles/components';

import './styles/global';

import store from './store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Content>
                <Header />

                <Error />

                <Routes />
            </Content>
        </BrowserRouter>
    </Provider>
);

export default App;
