import styles from './DetailTable.module.css'
const DetailTable = () => {
    return (
        <ul className={styles['order-detail-table']}>
            <li>Name</li>
            <li>Price per item</li>
            <li>Quantity</li>
            <li>Total price</li>
        </ul>
    )
}

export default DetailTable