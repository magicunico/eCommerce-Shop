import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import { ProductConsumer } from '../../contex'
import EmptyCart from './Empty'
import InCartList from './InCartList'
import InCartTotalAndPayment from './InCartTotalAndPayment'

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
                                    <InCartList value={value}/>
                                    <InCartTotalAndPayment value={value}/>
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