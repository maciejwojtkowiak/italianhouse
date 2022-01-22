import styles from './OrderWasSent.module.css'
import './OrderWasSent.css'
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart-slice'

const OrderWasSent = () => {
    const dispatch = useDispatch()
    const orderIsSent = useSelector(state => state.cart.orderIsSent)
    const onClickHandler = () => {
        dispatch(cartActions.showCart())
    }
    return (
        <CSSTransition mountOnEnter unmountOnExit in={orderIsSent} timeout={300} classNames='wasSent'>
            <div className={styles['order-was-sent']}>
                <h1>Order was sent</h1>
                <button onClick={onClickHandler}>Leave your cart</button>
            </div>
        </CSSTransition>
    )
}

export default OrderWasSent