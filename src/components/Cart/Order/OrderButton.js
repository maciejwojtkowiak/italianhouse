import styles from './OrderButton.module.css'
import { cartActions } from '../../../store/cart-slice'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

const OrderButton = (props) => {
    const cartItems = useSelector(state => state.cart.items)
    const orderIsShown = useSelector(state => state.cart.orderIsShown)
    const cartHasItems = cartItems.length > 0
    const dispatch = useDispatch()
    const showOrderFormHandler = () => {
        dispatch(cartActions.orderIsShown(true))
    }

    const hideOrderFormHandler = () => {
        dispatch(cartActions.orderIsShown(false))
    }

    return (
        <React.Fragment>
             {!orderIsShown && <button disabled={!cartHasItems} onClick={showOrderFormHandler} className={styles.button}>Order</button>} 
             {orderIsShown && <button onClick={hideOrderFormHandler} className={styles.button}>Go back</button>} 
        </React.Fragment>
        
          
        
    )
}

export default OrderButton