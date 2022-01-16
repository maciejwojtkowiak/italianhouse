import React from 'react'
import styles from './CartItem.module.css'

const CartItem = (props) => {
   const deleteHandler = () => {
    props.onClickHandler()
   }
    return (
        <div className={styles['cart-item']}>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
            <div className={styles.actions}>
                <p>{props.totalPrice}</p>
                <button onClick={deleteHandler}>&minus;</button>
            </div>
            
        </div>
        
         
       
    )
}

export default CartItem