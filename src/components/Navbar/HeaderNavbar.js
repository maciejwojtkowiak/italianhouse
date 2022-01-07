import styles from './HeaderNavbar.module.css'


const HeaderNavbar = () => {
    return (
        <navbar className={styles.navbar}>
            <div className={styles.restaurantName}>Italian House</div>
            <div>
                <ul class={styles.headerNavList}>
                    <li>
                        Home
                    </li>
                    <li>
                        Order
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </navbar>
    )
}


export default HeaderNavbar