import HeaderNavbar from './HeaderNavbar'
import styles from './Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderNavbar />
        </header>
    )
}

export default Header