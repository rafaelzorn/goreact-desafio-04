import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductList from '../components/ProductList';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ProductList} />
    </Switch>
);

export default Routes;
