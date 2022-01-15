import styles from './OrderButton.module.css'


const OrderButton = (props) => {
    return (
        
            <button onClick={props.onClick} className={styles.button}>Order</button>
        
    )
}

export default OrderButton