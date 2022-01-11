import React from "react"
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import Overlay from "../UI/Overlay"
import CartItems from "./CartItems"
import { useSelector } from "react-redux"



const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)
    const onOrderHandler = () => {
        fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify()
        })
    }

    return ReactDOM.createPortal(
        <Overlay>
            <div className={styles.cart}> 
                <CartItems />
                <button className={styles.button}>Order</button>
            </div>
        </Overlay>,
        

       
        document.getElementById('modal')
    )
}

export default Cart