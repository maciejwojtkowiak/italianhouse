import styles from './Notification.module.css'
import { useSelector } from 'react-redux'
import React from 'react'
import {CSSTransition} from 'react-transition-group'


const Notification = (props) => {
    // zaaplikuj CSSTransition
    const isAdded = useSelector(state => state.cart.added)
    const cartIsBeingFetched = useSelector(state => state.cart.fetchingCart)
    const notificationIsShown = useSelector(state => state.ui.notificationIsShown)
    console.log(cartIsBeingFetched, isAdded)
    let notificationStyles;
    if (props.type === 'FETCH' && notificationIsShown ) {
        notificationStyles = `${styles['notification-fetch']}`
    }

    if (props.type === 'CHANGE' && isAdded && notificationIsShown  ) {
        notificationStyles = `${styles.notification} ${styles['notification-added']}`
    }

    if (props.type === 'CHANGE' && !isAdded && notificationIsShown )  {
        notificationStyles = `${styles.notification} ${styles['notification-remove']}`
    }
    
    return (
            <CSSTransition in={notificationIsShown} timeout={100} classNames={styles.notification} >
                <div className={notificationStyles}>{notificationIsShown && <p>{props.message}</p>}</div> 
            </CSSTransition>
       
        
      
        
    )
}

export default Notification