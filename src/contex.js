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
        cartTotal: 0,
    };

    increment = (id) => {
        let tempCart = [...this.state.cart]

        const toUpdateProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(toUpdateProduct);

        const product = tempCart[index];

        product.count += 1;
        product.total += product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, ()=>this.addTotals())

    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]

        const toUpdateProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(toUpdateProduct);

        const product = tempCart[index];

        if (product.count >= 1) {
            product.count -= 1;
            product.total -= product.price;
        }

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, ()=>this.addTotals())

    }

    cartClear = () => {

        this.setState(() => {
            return {
                cart: []
            }
        }, ()=>{
            this.setProducts();
            this.addTotals(); })

    }

    
    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                products: [...tempProducts],
                cart: [...tempCart]
            }
        }, this.addTotals)

    }

    addTotals = () => {
        let totalValue = 0;
        this.state.cart.map(item => (totalValue += item.total));
        this.setState(() => {
            return {
                cartTotal: totalValue
            };
        });
    };

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
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product],
                detailProduct: { ...product }
            };
        }, this.addTotals)

    }



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                cartClear: this.cartClear,
                removeItem: this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }; 