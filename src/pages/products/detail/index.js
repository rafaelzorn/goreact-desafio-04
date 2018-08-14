import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../../components/Loading';
import { Creators as ProductDetailsActions } from '../../../store/ducks/productDetails';

import { Container } from './styles';

class ProductDetail extends Component {
    componentDidMount() {
        const { getProductDetailsRequest, match } = this.props;
        getProductDetailsRequest(match.params.id);
    }

    render() {
        const { productDetails } = this.props;

        return (
            <Fragment>
                {productDetails.loading ? (
                    <Loading message="Aguarde, carregando produto" />
                ) : (
                    <Container>
                        <div className="img">
                            <img src={productDetails.data.image} alt={productDetails.data.name} />
                        </div>

                        <div className="info">
                            <span className="name">{productDetails.data.name}</span>
                            <span className="brand">{productDetails.data.brand}</span>
                            <span className="value">R$ {productDetails.data.price}</span>

                            <button type="button" className="button">
                                ADICIONAR AO CARRINHO
                            </button>
                        </div>
                    </Container>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    productDetails: state.productDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductDetailsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetail);
