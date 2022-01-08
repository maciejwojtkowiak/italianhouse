import styles from './HeaderNavbar.module.css'
import CartButton from '../Cart/CartButton'



const HeaderNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.restaurantName}>Italian House</div>
            <div>
                <ul className={styles.headerNavList}>
                    <li>
                        Home
                    </li>
                    <li>
                        Order
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                         <div className={styles.cart}><CartButton /></div>
                    </li>
                   
                </ul>
            </div>
        </nav>
    )
}


export default HeaderNavbar