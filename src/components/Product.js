import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../contex'


export default class Product extends React.Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    {/* image */}
                    <ProductConsumer>
                        {(value)=>(
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="book image" className="card-img-top" />
                            </Link>
                            <button
                                className="cart-btn"
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                                {inCart ?
                                    (<p className="text-capitalize mb-0" disabled>In cart</p>
                                    ) : (
                                        <i className="fas fa-cart-plus" />
                                    )}
                            </button>
                        </div>
                        )}
                    </ProductConsumer>
                    {/* footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <h4 className="align-self-center mb-0"> {title} </h4>
                        <h4 className="font-italic mb-0">
                            <span className="mr-1 ml-3">$</span>{price}
                        </h4>

                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 0.5s linear;
}
.card-footer{
    background: transparent;
    color: var(--mainColor);
    transition: all 0.5s linear;
    
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: var(--mainColor);
        color: var(--mainAccent);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}

.card-img-top{
    transition: all 0.3s linear;
}

.img-container:hover .card-img-top{
    transform:scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    border:none;
    background:var(--mainColor);
    color: var(--mainAccent);
    &:hover {
        background:var(--mainAccent);
        color: var(--mainColor);
        curson:pointer;
    }
    &:focus{
        outline:none;
    }
    font-size:1.4rem;
    border-radius:1rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 0.5s linear;
}

.img-container:hover .cart-btn{
    transform: translate(0,0);
}
`;