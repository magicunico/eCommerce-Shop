import React from 'react'
import Title from "./Title"
import { Link } from 'react-router-dom'

export default class Payment extends React.Component {

    render() {
        const { total } = this.props.location.state;
        return (
            <React.Fragment>
                <Title name="THANK YOU " title="for your order" />
                <div className="container py-5 text-center">
                    Your order will be sent with 3-5 days.
                <div className="payment-details mb-3 mt-5">Payment details:</div>
                    <div className="mb-2 mt-2">
                        Total: <span>{total} $</span>
                    </div>
                    <div className="mb-2 mt-2">
                        Account number: <span>12 3456 7890 9876 5432 1234 5678</span>
                    </div>
                    <div className="mb-2 mt-2">
                        Title: <span>Book shop UniRead - order number 123/56 of total={total} $</span>
                    </div>
                    {/* <div className="col-10 mx-auto col-lg-2 my-1">
                        <button onClick={() => cartClear()}>
                            Payment confirm!
                        </button>
                    </div> */}
                    <Link to="/">
                        <span className="btn btn-payment" >
                            <i className="fas fa-shopping-cart">Go to main page</i>
                        </span>
                    </Link>
                </div>
            </React.Fragment>
        )


    }
}