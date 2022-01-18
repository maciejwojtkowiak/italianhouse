import React from "react"
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import CartItems from "./CartItems"
import OrderForm from "./Order/OrderForm"
import { useState } from "react"
import DetailTable from "./DetailTable"
import OrderButton from "./Order/OrderButton"
import { useSelector } from "react-redux"



const Cart = () => {
    const [orderIsShown, setOrderIsShown]= useState(false)
    const cartItems = useSelector(state => state.cart.items)
    let cartHasItems = cartItems.length > 0

   

    const showOrderFormHandler = () => {
        setOrderIsShown(true)
    }

    return ReactDOM.createPortal(
        <React.Fragment>
                <div className={styles.cart}> 
                    <DetailTable />
                    <CartItems />
                    {!orderIsShown && <OrderButton onClick={showOrderFormHandler} />}
                    {cartHasItems && orderIsShown && < OrderForm />}
                </div>
        </React.Fragment>,
            
            
        
    
        document.getElementById('modal')
    )
}

export default Cart