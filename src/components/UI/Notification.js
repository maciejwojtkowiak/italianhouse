import styles from './Notification.module.css'
import { useSelector } from 'react-redux'


const Notification = (props) => {
    // zmień powiadomienia zaleznie od otrzymanych props a nie tutaj.
    const isAdded = useSelector(state => state.cart.added)
    const cartIsBeingFetched = useSelector(state => state.cart.fetchingCart)
    const cartIsChanged = useSelector(state => state.cart.changed)
    console.log(cartIsBeingFetched, isAdded)
    let notificationStyles;
    if (props.type === 'FETCH') {
        notificationStyles = `${styles.notification} ${styles['notification-fetch']}`
    }

    if (props.type === 'CHANGE' && isAdded) {
        notificationStyles = `${styles.notification} ${styles['notification-added']}`
    }

    if (props.type === 'CHANGE' && !isAdded) {
        notificationStyles = `${styles.notification} ${styles['notification-remove']}`
    }
    
    return (
        
        <div className={notificationStyles}>
            <p>{props.message}</p>
        </div>
       
        
    )
}

export default Notification