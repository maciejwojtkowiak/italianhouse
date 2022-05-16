import styles from "./HeaderNavbar.module.css";
import CartButton from "../Cart/CartButton";

const HeaderNavbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.restaurantName}>Italian House</div>
      <div>
        <ul className={styles.headerNavList}>
          <li onClick={props.scrollToMeals}>Meals</li>
          <li onClick={props.scrollToAbout}>About</li>
          <li>
            <div className={styles.cart}>
              <CartButton />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
