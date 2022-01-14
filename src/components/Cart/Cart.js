import React from "react"
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import CartItems from "./CartItems"
import { useSelector } from "react-redux"
import OrderForm from "./Order/OrderForm"
import { useState } from "react"



const Cart = () => {
    const [orderIsShown, setOrderIsShown]= useState(false)

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

    const showOrderFormHandler = () => {
        setOrderIsShown(true)
    }

    return ReactDOM.createPortal(
        <React.Fragment>
                <div className={styles.cart}> 
                    <CartItems />
                    <form onSubmit={onOrderHandler}>
                        <button onClick={showOrderFormHandler} className={styles.button}>Order</button>
                    </form>
                    {orderIsShown && < OrderForm />}
                </div>
        </React.Fragment>,
            
            
        
    
        document.getElementById('modal')
    )
}

export default Cart