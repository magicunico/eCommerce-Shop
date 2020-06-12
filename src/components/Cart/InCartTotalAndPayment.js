 import React from 'react'
 

 export default function InCartTotalAndPayment({value}){
     const {cartTotal}=value
     return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-title text-right">
                        <h5>
                            <span className="text-title"> Total: </span>
                            <strong> $ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
     )
 }