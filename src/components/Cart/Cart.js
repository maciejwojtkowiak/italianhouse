import React from "react"
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import CartItems from "./CartItems"
import OrderForm from "./Order/OrderForm"
import { useState } from "react"
import DetailTable from "./DetailTable"
import OrderButton from "./Order/OrderButton"



const Cart = () => {
    const [orderIsShown, setOrderIsShown]= useState(false)

   

    const showOrderFormHandler = () => {
        setOrderIsShown(true)
    }

    return ReactDOM.createPortal(
        <React.Fragment>
                <div className={styles.cart}> 
                    <DetailTable />
                    <CartItems />
                    {!orderIsShown && <OrderButton onClick={showOrderFormHandler} />}
                    {orderIsShown && < OrderForm />}
                </div>
        </React.Fragment>,
            
            
        
    
        document.getElementById('modal')
    )
}

export default Cart