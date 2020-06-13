import React from 'react'
import { Link } from 'react-router-dom'


export default class InCartTotalAndPayment extends React.Component {
    render() {
        const { cartTotal, cartClear } = this.props.value
    
        
        
        
        
        
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-title text-right">
                            <h5>
                                <span className="text-title"> Total: </span>
                                <strong> $ {cartTotal}</strong>
                            </h5>
                            <Link to={{ pathname: "/payment", state: { total: cartTotal} }}>
                                <span className="btn btn-payment">
                                    <i className="fas fa-money-bill-wave">Go to payment</i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
        
    }
}