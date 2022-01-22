import styles from './Notification.module.css'
import { useSelector } from 'react-redux'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './Notification.css'


const Notification = (props) => {

    const isAdded = useSelector(state => state.cart.added)
    const notificationIsShown = useSelector(state => state.ui.notificationIsShown)
    const isCleared = useSelector(state => state.cart.cleared)
    
    let notificationStyles;
    if (props.type === 'FETCH' && notificationIsShown ) {
        notificationStyles = `${styles['notification-fetch']}`
    }

    if (props.type === 'CHANGE' && isAdded && notificationIsShown  ) {
        notificationStyles = `${styles['notification-added']}`
    }

    if (props.type === 'CHANGE' && !isAdded && notificationIsShown )  {
        notificationStyles = ` ${styles['notification-removed']}`
    }

    if (props.type === 'CHANGE' && isCleared && notificationIsShown )  {
        notificationStyles = ` ${styles['notification-cleared']}`
    }
    
    return (
        <CSSTransition mountOnEnter  in={notificationIsShown} timeout={2000} classNames='notification'>
            <div className={`${styles.notification} ${notificationStyles}`}><p>{props.message}</p></div> 
        </CSSTransition>
            
       
        
      
        
    )
}

export default Notification