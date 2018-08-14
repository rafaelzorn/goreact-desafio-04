import React, { Fragment } from 'react';
import { Products } from './styles';

const Cart = () => (
    <Fragment>
        <Products>
            <table>
                <thead>
                    <th className="img" />
                    <th className="product">PRODUTO</th>
                    <th className="value">VALOR</th>
                    <th className="quantity">QTD</th>
                    <th className="subtotal">SUBTOTAL</th>
                    <th className="delete" />
                </thead>
                <tbody>
                    <tr>
                        <td className="img">
                            <img src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg" />
                        </td>
                        <td className="product">
                            <span className="name">Camiseta Trok</span>
                            <span className="brand">Element</span>
                        </td>
                        <td className="value">R$ 50,00</td>
                        <td className="quantity">
                            <input value="2" />
                        </td>
                        <td className="subtotal">R$ 100,00</td>
                        <td className="delete">X</td>
                    </tr>

                    <tr>
                        <td className="img">
                            <img src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg" />
                        </td>
                        <td className="product">
                            <span className="name">Camiseta Trok</span>
                            <span className="brand">Element</span>
                        </td>
                        <td className="value">R$ 50,00</td>
                        <td className="quantity">
                            <input value="2" />
                        </td>
                        <td className="subtotal">R$ 100,00</td>
                        <td className="delete">X</td>
                    </tr>

                    <tr>
                        <td className="img">
                            <img src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg" />
                        </td>
                        <td className="product">
                            <span className="name">Camiseta Trok</span>
                            <span className="brand">Element</span>
                        </td>
                        <td className="value">R$ 50,00</td>
                        <td className="quantity">
                            <input value="2" />
                        </td>
                        <td className="subtotal">R$ 100,00</td>
                        <td className="delete">X</td>
                    </tr>
                </tbody>
            </table>
        </Products>
    </Fragment>
);

export default Cart;
