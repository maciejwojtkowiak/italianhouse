import styles from './Notification.module.css'
import { useSelector } from 'react-redux'


const Notification = (props) => {
    const isAdded = useSelector(state => state.cart.added)
    return (
        <div className={`${styles.notification} ${isAdded ? styles['notification-added'] : styles['notification-remove']}`}>
            <p>Item was added to cart</p>
            <p>{props.message}</p>
        </div>
    )
}

export default Notification