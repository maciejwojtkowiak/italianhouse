import styles from './Notification.module.css'


const Notification = (props) => {
    return (
        <div className={styles.notification}>
            <p>Item was added to cart</p>
            <p>{props.message}</p>
        </div>
    )
}

export default Notification