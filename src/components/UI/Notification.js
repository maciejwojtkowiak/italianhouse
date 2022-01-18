import styles from './Notification.module.css'
import { useSelector } from 'react-redux'


const Notification = (props) => {
    const isAdded = useSelector(state => state.cart.added)
    const cartIsBeingFetched = useSelector(state => state.cart.fetchingCart)
    const cartIsChanged = useSelector(state => state.cart.changed)
    console.log(cartIsBeingFetched, isAdded)
    const notificationStyles = `${styles.notification} ${!cartIsChanged && styles['notification-fetch'] } ${(isAdded) ? styles['notification-added'] : styles['notification-remove']}`
    return (
        
        <div className={notificationStyles}>
            <p>{props.message}</p>
        </div>
       
        
    )
}

export default Notification