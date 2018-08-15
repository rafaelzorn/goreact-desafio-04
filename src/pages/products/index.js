import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatReal } from '../../helpers';
import { Creators as ProductsActions } from '../../store/ducks/products';
import Loading from '../../components/Loading';
import { Container, Product } from './styles';

class Products extends Component {
    componentDidMount() {
        this.requestProducts();
    }

    componentDidUpdate(prevProps) {
        const { match } = this.props;

        if (match.params.id !== prevProps.match.params.id) {
            this.requestProducts();
        }
    }

    requestProducts = () => {
        const { getProductsRequest, getProductsByCategoryIdRequest, match } = this.props;

        if (match.params.id === undefined) {
            getProductsRequest();
        } else {
            getProductsByCategoryIdRequest(match.params.id);
        }
    };

    render() {
        const { products } = this.props;

        return (
            <Fragment>
                {products.loading ? <Loading /> : null}

                <Container>
                    {products.data.map(product => (
                        <Product to={`/produtos/${product.id}`} key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="name">{product.name}</div>
                            <div className="brand">{product.brand}</div>
                            <div className="price">R$ {formatReal(product.price)}</div>
                        </Product>
                    ))}
                </Container>
            </Fragment>
        );
    }
}

Products.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
    getProductsRequest: PropTypes.func.isRequired,
    getProductsByCategoryIdRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                brand: PropTypes.string,
                price: PropTypes.number,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => ({
    products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Products);
