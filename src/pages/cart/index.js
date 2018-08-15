import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatReal } from '../../helpers';
import { Creators as CartActions } from '../../store/ducks/cart';
import { Container, TableContainer, Table } from './styles';

class Cart extends Component {
    handleQuantityChange = (id, value) => {
        const { setQuantity } = this.props;
        setQuantity(id, value < 1 ? 1 : value);
    };

    renderCartProducts = () => {
        const { cart, removeProduct, total } = this.props;

        return (
            <Fragment>
                <TableContainer>
                    <Table>
                        <thead>
                            <tr>
                                <th />
                                <th>PRODUTO</th>
                                <th>VALOR</th>
                                <th>QTD</th>
                                <th>SUBTOTAL</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {cart.data.map(product => (
                                <tr className="product" key={product.data.id}>
                                    <td style={{ width: '5%' }}>
                                        <img src={product.data.image} alt={product.data.name} />
                                    </td>
                                    <td style={{ width: '50%' }}>
                                        <span className="title">{product.data.name}</span> <br />
                                        <span className="brand">{product.data.brand}</span>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <span className="price">
                                            R$ {formatReal(product.data.price)}
                                        </span>
                                    </td>
                                    <td style={{ width: '10%' }}>
                                        <input
                                            type="number"
                                            name="quatity"
                                            min={1}
                                            value={product.quantity}
                                            onChange={(e) => {
                                                this.handleQuantityChange(
                                                    product.data.id,
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <span className="price">
                                            R$ {formatReal(product.subTotal)}
                                        </span>
                                    </td>
                                    <td style={{ width: '5%' }}>
                                        <button
                                            type="button"
                                            onClick={() => removeProduct(product)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableContainer>

                <div className="total">
                    <div>
                        <span className="text">TOTAL</span>
                        <span className="price">R$ {formatReal(total)}</span>
                    </div>
                </div>
            </Fragment>
        );
    };

    render() {
        const { cart } = this.props;

        return (
            <Container>
                {cart.data.length > 0 ? (
                    this.renderCartProducts()
                ) : (
                    <div className="teste">
                        Ops, você não tem nenhum produto adicionado ao carrinho :(
                    </div>
                )}
            </Container>
        );
    }
}

Cart.propTypes = {
    setQuantity: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
    cart: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                brand: PropTypes.string,
                price: PropTypes.string,
                quantity: PropTypes.number,
                subTotal: PropTypes.string,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => ({
    cart: {
        ...state.cart,
        data: state.cart.data.map(item => ({
            ...item,
            subTotal: item.data.price * item.quantity,
        })),
    },

    total: state.cart.data.reduce((prevVal, item) => prevVal + item.data.price * item.quantity, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);
