import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import { ProductConsumer } from '../../contex'
import EmptyCart from './Empty'

export default class Cart extends React.Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Your " title="cart" />
                                    <CartColumns />
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>

            </section>
        )
    }
}