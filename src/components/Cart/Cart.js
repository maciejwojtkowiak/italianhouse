import { useSelector } from "react-redux"
import React from "react"
import ReactDOM from 'react-dom'
import { cartActions } from "../../store/cart-slice"



const Cart = () => {
    const cart = useSelector(state => state.cart.items)
    return ReactDOM.createPortal(
        <div> SIEMANO </div>,
        document.getElementById('modal')
    )
}

export default Cart