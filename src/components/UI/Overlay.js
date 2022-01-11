import styles from './Overlay.module.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const Overlay = (props) => {
    // Overlay oddzielnie z oknem koszyka.
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(cartActions.showCart())
    }
    return ReactDOM.createPortal(
        <div onClick={onClickHandler} className={styles.overlay}>{props.children}</div>,
        document.getElementById('overlay')
    )
}

export default Overlay