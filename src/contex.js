import React from 'react'
import { detailProduct, storeProducts } from './data'

const ProductContext = React.createContext();



class ProductProvider extends React.Component {

    state = {
        products: [],
        detailProduct: detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts=()=>{
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts=[...tempProducts,singleItem];
        })
        this.setState(()=>{
            return {products: tempProducts}
        })
    }

    handleDetail = () => {
        console.log('details details')
    }

    addToCart = (id) => {
        console.log(`Id is ${id}`)
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