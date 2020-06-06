import React from 'react'
import { detailProduct, storeProducts } from './data'

const ProductContext = React.createContext();



class ProductProvider extends React.Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartTotal:0,
    };

    increment=(id)=>{
        console.log("inc")
    }

    decrement=(id)=>{
        console.log("dec")
    }

    removeItem=(id)=>{
        console.log("remove")
    }

    clearCart=()=>{
        console.log("cleared")
    }

    componentDidMount() {
        this.setProducts();
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            };
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        const totalValue = product.price;
        product.inCart = true;
        product.count = 1;
        product.total = totalValue;

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        })


    }



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                clearCart:this.clearCart,
                removeItem:this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }; 