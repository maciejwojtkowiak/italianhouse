import styles from './HeaderNavbar.module.css'


const HeaderNavbar = () => {
    return (
        <navbar class={styles.headerNav}>
            <ul>
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
        </navbar>
    )
}


export default HeaderNavbar