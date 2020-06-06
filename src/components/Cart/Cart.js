import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'

export default class Cart extends React.Component{
    render(){
        return(
            <section>
                <Title name="Your " title="cart"/>
                <CartColumns />
            </section>
        )
    }
}