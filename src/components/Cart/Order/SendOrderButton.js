import styles from './SendOrderButton.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart-slice'
const SendOrderButton = (props) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(cartActions.orderIsSent(true))
    }

    return (
         
            <button onClick={clickHandler} className={styles.button} type='submit' disabled={!props.isValid} >Send Order</button>
        
    )
}

export default SendOrderButton