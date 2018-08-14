import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../Loading';
import Error from '../Error';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import { Creators as ProductsAction } from '../../store/ducks/products';

import { StyledHeader, Categories, Title } from './styles';

class Header extends Component {
    componentDidMount() {
        const { getCategoriesRequest } = this.props;
        getCategoriesRequest();
    }

    render() {
        const { categories, getProductsRequest } = this.props;

        return (
            <Fragment>
                <StyledHeader>
                    <Title to="/">GoCommerce</Title>

                    <div className="cart">
                        <Link to="carrinho">
                            <i className="fa fa-shopping-cart" /> Meu Carrinho (3)
                        </Link>
                    </div>
                </StyledHeader>

                {categories.loading ? (
                    <Loading message="Aguarde, carregando categorias" />
                ) : (
                    <Categories>
                        <ul>
                            {categories.data.map(category => (
                                <li
                                    onClick={() => getProductsRequest(category.id)}
                                    key={category.id}
                                    onKeyUp={this.handleKeyUp}
                                    role="presentation"
                                >
                                    {category.title}
                                </li>
                            ))}
                        </ul>
                    </Categories>
                )}

                <Error />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CategoriesActions, ...ProductsAction }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
