import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../pages/products';
import ProductDetail from '../pages/products/detail';
import Cart from '../pages/cart';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/produtos/:id" component={ProductDetail} />
        <Route path="/carrinho" component={Cart} />
    </Switch>
);

export default Routes;
