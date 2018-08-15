import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductDetailsActions } from '../../../store/ducks/productDetails';
import { Creators as CartActions } from '../../../store/ducks/cart';
import Loading from '../../../components/Loading';
import { Container } from './styles';

class ProductDetail extends Component {
    componentDidMount() {
        const { getProductDetailsRequest, match } = this.props;

        getProductDetailsRequest(match.params.id);
    }

    addToCart = (product) => {
        const { addProduct, history } = this.props;

        addProduct(product);
        history.push('/carrinho');
    };

    render() {
        const { productDetails } = this.props;

        return (
            <Fragment>
                {productDetails.loading ? (
                    <Loading />
                ) : (
                    <Container>
                        <div className="img">
                            <img src={productDetails.data.image} alt={productDetails.data.name} />
                        </div>

                        <div className="info">
                            <span className="name">{productDetails.data.name}</span>
                            <span className="brand">{productDetails.data.brand}</span>

                            <span className="price">R$ {productDetails.data.price}</span>

                            <button type="button" onClick={() => this.addToCart(productDetails)}>
                                ADICIONAR AO CARRINHO
                            </button>
                        </div>
                    </Container>
                )}
            </Fragment>
        );
    }
}

ProductDetail.propTypes = {
    getProductDetailsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
    addProduct: PropTypes.func.isRequired,
    productDetails: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
        }),
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    productDetails: state.productDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductDetailsActions, ...CartActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetail);
