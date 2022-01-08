import CartIcon from './CartIcon'
import styles from './CartButton.module.css'
import { useSelector } from 'react-redux'

const CartButton = () => {
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <button className={styles.cartButton}>
            <CartIcon />
            <span className={styles.cartAmount}>{totalAmount}</span>
        </button>
    )
}

export default CartButton