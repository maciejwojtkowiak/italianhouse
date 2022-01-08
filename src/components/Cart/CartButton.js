import CartIcon from './CartIcon'
import styles from './CartButton.module.css'

const CartButton = () => {
    return (
        <button className={styles.cartButton}>
            <CartIcon />
            <span className={styles.cartAmount}>2</span>
        </button>
    )
}

export default CartButton