import styles from './Notification.module.css'
import { useSelector } from 'react-redux'


const Notification = (props) => {
    const isAdded = useSelector(state => state.cart.added)
    const cartIsBeingFetched = useSelector(state => state.cart.fetchingCart)
    const notificationStyles = `${styles.notification} ${!cartIsBeingFetched && styles['notification-fetch']} ${(isAdded && cartIsBeingFetched) ? styles['notification-added'] : styles['notification-remove']}`
    return (
        <div className={notificationStyles}>
            <p>{props.message}</p>
        </div>
    )
}

export default Notification