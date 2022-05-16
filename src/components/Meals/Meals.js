import Card from "../UI/Card";
import styles from "./Meals.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import MealsOrder from "./MealsOrder";
import diavola from "../../images/Diavola.png";
import marg from "../../images/Marga.png";
import prosciutto from "../../images/Prosciutto.png";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Margherita",
    ingredients: "tomato sauce, mozarella",
    price: 13,
    quantity: 1,
    img: marg,
  },

  {
    id: 2,
    name: "Diavola",
    ingredients: "cheese, tomato sauce, salami and spicy paprika",
    price: 16,
    quantity: 1,
    img: diavola,
  },

  {
    id: 3,
    name: "Prosciutto",
    ingredients: "cheese, tomato sauce, italian ham",
    price: 18,
    quantity: 1,
    img: prosciutto,
  },
];

const Meals = (props) => {
  const dispatch = useDispatch();

  const onAddToCart = (meal) => {
    dispatch(cartActions.addItemToCart(meal));
  };

  return (
    <div ref={props.scrollToMeals} className={styles.meals} id="meals">
      {DUMMY_MEALS.map((meal) => (
        <Card key={meal.id}>
          <div className={styles["meal-item"]}>
            <div className={styles["meal-detail"]}>
              <h3 className={styles.name}>{meal.name}</h3>
              <p className={styles.ingredients}>{meal.ingredients}</p>
              <img alt="pizza-img" src={meal.img} />
            </div>
            <div className={styles["meal-detail"]}>
              <p className={styles.price}>{meal.price}$</p>
              <MealsOrder onAddToCart={onAddToCart.bind(null, meal)} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Meals;
