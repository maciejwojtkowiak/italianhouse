import styles from './CartItem.module.css'
const CartItem = (props) => {
    return (
        <div className={styles['cart-item']}>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
            <p>{props.totalPrice}</p>
        </div>
    )
}

export default CartItem