import React from "react"
import ReactDOM from 'react-dom'
import styles from './Cart.module.css'
import CartItems from "./CartItems"
import OrderForm from "./Order/OrderForm"
import DetailTable from "./DetailTable"
import OrderButton from "./Order/OrderButton"
import { useSelector} from 'react-redux'
import OrderWasSent from "./Order/OrderWasSent"
import { CSSTransition } from "react-transition-group"
import './Cart.css'



const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const isShown = useSelector(state => state.cart.cartIsShown)
    const orderIsSent = useSelector(state => state.cart.orderIsSent)
    const orderIsShown = useSelector(state => state.cart.orderIsShown)
    
    
    let cartHasItems = cartItems.length > 0

    return ReactDOM.createPortal(
        <React.Fragment>
            <CSSTransition unmountOnExit mountOnEnter in={isShown} timeout={1000} classNames='cartTransition'>
                <div className={styles.cart}> 
                        <DetailTable />
                        <CartItems />
                        <OrderButton />
                        {cartHasItems && orderIsShown && !orderIsSent && < OrderForm />}
                        {orderIsSent && <OrderWasSent />}
                    </div>
            </CSSTransition>
        </React.Fragment>,
            
            
        
    
        document.getElementById('modal')
    )
}

export default Cart