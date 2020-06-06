import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../contex'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'


export default class Modal extends React.Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (<ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-enter text-capitalize p-5">
                                        <h5>Added</h5>
                                        <img src={img} alt="product" className="img-fluid" />
                                        <h5 className="text-colorAccentWithoutBackground pt-5">{title}</h5>
                                        <h5 className="text-muted p-2">price: $ {price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer productBtn onClick={()=>closeModal()}>
                                                Continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                Go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }

}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainLight);
}
`