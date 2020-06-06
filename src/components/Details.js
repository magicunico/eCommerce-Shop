import React from 'react'
import { ProductConsumer } from '../contex'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends React.Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, author, info, img, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mxauto text-title text-center text-slanted my-5">
                                    <h1>{title}</h1>
                                    <h4 className="text-muted text-uppercase mt-3 mb-2">{author}</h4>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <di className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product photo" />
                                </div>
                                {/* productText */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Title: {title}</h2>
                                    <h4 className="mt-3 mb-2">
                                        author: {author}
                                    </h4>
                                    <h4 className="text-capitalize text-colorAccent">
                                        <strong>
                                            price: <span className="background-colorAccent">$ {price}</span>
                                        </strong>
                                    </h4>
                                    <p className="font-weight-bold mt-3 mb-0">
                                        Description:
                                    </p>
                                    <p className="text-muted lead mb-3">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer
                                            productBtn
                                            >
                                                Back to products
                                                </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                            {inCart ? 'in cart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </di>
                            {/* endproduct info */}
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}