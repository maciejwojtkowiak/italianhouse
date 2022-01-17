import styles from './OrderButton.module.css'
import { useSelector } from 'react-redux'

const OrderButton = (props) => {
    const cartItems = useSelector(state => state.cart.items)
    const cartHasItems = cartItems.length > 0

    return (
        
            <button disabled={!cartHasItems} onClick={props.onClick} className={styles.button}>Order</button>
        
    )
}

export default OrderButton