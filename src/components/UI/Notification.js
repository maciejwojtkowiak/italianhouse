import styles from './Notification.module.css'
import { useSelector } from 'react-redux'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './Notification.css'


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
        notificationStyles = `${styles['notification-added']}`
    }

    if (props.type === 'CHANGE' && !isAdded && notificationIsShown )  {
        notificationStyles = ` ${styles['notification-remove']}`
    }
    
    return (
        <CSSTransition mountOnEnter  in={notificationIsShown} timeout={2000} classNames='notification'>
            <div className={`${styles.notification} ${notificationStyles}`}><p>{props.message}</p></div> 
        </CSSTransition>
            
       
        
      
        
    )
}

export default Notification