import React from "react"
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import Overlay from "../UI/Overlay"
import CartItems from "./CartItems"
import { useSelector } from "react-redux"



const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)
    const onOrderHandler = (e) => {
        e.preventDefault()
        fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify(cartItems),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    return ReactDOM.createPortal(
       
            <div className={styles.cart}> 
                <CartItems />
                <form onSubmit={onOrderHandler}>
                    <button className={styles.button}>Order</button>
                </form>
                
            </div>,
        
        

       
        document.getElementById('modal')
    )
}

export default Cart