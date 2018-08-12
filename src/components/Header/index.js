import React, { Fragment } from 'react';
import { StyledHeader, Categories } from './styles';

const Header = () => (
    <Fragment>
        <StyledHeader>
            <h1>GoCommerce</h1>

            <div className="cart">
                <a href="#">
                    <i className="fa fa-shopping-cart" /> Meu Carrinho (3)
                </a>
            </div>
        </StyledHeader>

        <Categories>
            <ul>
                <li>
                    <a href="#">Camisetas</a>
                </li>
            </ul>
        </Categories>
    </Fragment>
);

export default Header;
