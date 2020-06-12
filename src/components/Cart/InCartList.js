import React from 'react'
import InCartItem from './InCartItem'

export default function InCartList({value}){
    const {cart} = value
    return(
        <div className="container-fluid">
            {cart.map(item=>{
                return <InCartItem key={item.id} item={item} value={value}/>
            })}
        </div>
    )
}