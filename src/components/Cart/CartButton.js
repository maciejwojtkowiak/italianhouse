import CartIcon from './CartIcon'
import styles from './CartButton.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'


const CartButton = () => {
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(cartActions.showCart())
    }
    return (
        <button onClick={onClickHandler} className={styles.cartButton}>
            <CartIcon />
            <span className={styles.cartAmount}>{totalAmount}</span>
        </button>
    )
}

export default CartButton