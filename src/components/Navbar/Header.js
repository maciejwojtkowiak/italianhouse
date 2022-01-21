import HeaderNavbar from './HeaderNavbar'
import styles from './Header.module.css'


const Header = (props) => {
    return (
        <header className={styles.header}>
            <HeaderNavbar scrollToMeals={props.scrollToMeals} scrollToAbout={props.scrollToAbout} />
        </header>
    )
}

export default Header