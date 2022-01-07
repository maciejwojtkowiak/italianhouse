import styles from './Hero.module.css'
import Header from '../Navbar/Header'

const Hero = () => {
    
    
    return (    
        <div className={styles.heroContainer}>
             <header className={styles.header}>
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
            </header>
        </div>
    )
}

export default Hero