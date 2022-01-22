import React from 'react'
import styles from './CartItem.module.css'
import { useSelector } from 'react-redux'

const CartItem = (props) => {
   const deleteHandler = () => {
    props.onClickHandler()
   }
   const orderIsShown = useSelector(state => state.cart.orderIsShown)
   const orderIsSent = useSelector(state => state.cart.orderIsSent)
    return (
        <div className={styles['cart-item']}>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
            <div className={styles.actions}>
                <p>{props.totalPrice}</p>
                {!orderIsShown && !orderIsSent && <button onClick={deleteHandler}>&minus;</button>}
            </div>
        </div>
       
    )
}

export default CartItem