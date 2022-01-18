import React from "react"
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import CartItems from "./CartItems"
import OrderForm from "./Order/OrderForm"
import { useState } from "react"
import DetailTable from "./DetailTable"
import OrderButton from "./Order/OrderButton"
import { useSelector} from 'react-redux'
import OrderWasSent from "./Order/OrderWasSent"



const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const orderIsSent = useSelector(state => state.cart.orderIsSent)
    const orderIsShown = useSelector(state => state.cart.orderIsShown)
    
    let cartHasItems = cartItems.length > 0

   

    

    return ReactDOM.createPortal(
        <React.Fragment>
                <div className={styles.cart}> 
                    <DetailTable />
                    <CartItems />
                    <OrderButton />
                    {cartHasItems && orderIsShown && !orderIsSent && < OrderForm />}
                    {orderIsSent && <OrderWasSent />}
                </div>
        </React.Fragment>,
            
            
        
    
        document.getElementById('modal')
    )
}

export default Cart