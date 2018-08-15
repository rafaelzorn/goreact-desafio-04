import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import {
    Container, ContainerSection, Cart, Categories, Menu,
} from './styles';

class Header extends Component {
    componentDidMount() {
        const { getCategoriesRequest } = this.props;

        getCategoriesRequest();
    }

    render() {
        const { categories, cart } = this.props;

        return (
            <Container>
                <ContainerSection>
                    <h1 className="title">GoCommerce</h1>
                    <Cart to="/carrinho">
                        <i className="fa fa-shopping-cart" /> Meu Carrinho ({cart.data.length})
                    </Cart>
                </ContainerSection>

                <Categories>
                    <Menu to="/" className="home">
                        Home
                    </Menu>

                    {categories.loading ? (
                        <i className="fa fa-spinner fa-pulse" />
                    ) : (
                        categories.data.map(category => (
                            <Menu key={category.id} to={`/categorias/${category.id}/produtos`}>
                                {category.title}
                            </Menu>
                        ))
                    )}
                </Categories>
            </Container>
        );
    }
}

Header.propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
            }),
        ),
    }).isRequired,
    cart: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    categories: state.categories,
    cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
