import React from 'react'

export default function InCartItem({ item, value }) {

    const { id, title, img, price, total, count } = item

    const { increment, decrement, removeItem } = value

    return (
        <div className="row my-1 text-center">
            <div className="col-10 mx-auto col-lg-2 my-1">
                <img src={img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2 my-1">
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-1">
                $ {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-1">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="count-cl mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>

                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-1">
                <button onClick={()=>removeItem(id)}>
                    <i className="fa fa-trash" />
                </button>
            </div>

            <div className="col-10 mx-auto col-lg-2 my-1">
                $ {total}
            </div>
        </div>
    )
}