import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../components/Loading';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Container, Product } from './styles';

class Products extends Component {
    componentDidMount() {
        const { getProductsRequest } = this.props;
        getProductsRequest(1);
    }

    render() {
        const { products } = this.props;

        return (
            <Fragment>
                {products.loading ? <Loading message="Aguarde, carregando produtos" /> : null}

                <Container>
                    {products.data.map(product => (
                        <Product to={`/produtos/${product.id}`} key={product.id}>
                            <img src={product.image} alt={product.name} />

                            <div className="info">
                                <span className="name">{product.name}</span>
                                <span className="brand">{product.brand}</span>
                                <span className="value">R$ {product.price}</span>
                            </div>
                        </Product>
                    ))}
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Products);
