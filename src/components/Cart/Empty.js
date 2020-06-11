import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button'

export default function EmptyCart(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    Your cart is empty!
                    <Link to="/" className="nav-link text-title border-top border-bottom border-danger ">
                            Find books to buy
                        </Link>
                </div>
                
            </div>
        </div>
    )
}