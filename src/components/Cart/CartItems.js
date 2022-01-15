import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import styles from './CartItems.module.css'
const CartItems = () => {
    const items = useSelector(state => state.cart.items)
    console.log(items)
    return (
        <React.Fragment>
            
            <div className={styles.items}>
                {items.map(item => 
                <CartItem key={item.id} name={item.name} price={item.price} 
                quantity={item.quantity} totalPrice={item.totalPrice} />)}
            </div>
        </React.Fragment>
        
    )
}

export default CartItems