import React from 'react'
import { detailProduct, storeProducts } from './data'

const ProductContext = React.createContext();



class ProductProvider extends React.Component {

    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }

    handleDetail = () => {
        console.log('details details')
    }

    addToCart = () => {
        console.log('add to cart')
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }; 