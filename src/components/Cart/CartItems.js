import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
import CartItem from './CartItem'
import styles from './CartItems.module.css'
const CartItems = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const onClickHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id))
    }
    return (
        <React.Fragment>
            
            <div className={styles.items}>
                {items.map(item => 
                <CartItem key={item.id} id={item.id} name={item.name}  price={item.price} 
                quantity={item.quantity} totalPrice={item.totalPrice} onClickHandler={onClickHandler.bind(null, item.id)} />)}
            </div>
        </React.Fragment>
        
    )
}

export default CartItems