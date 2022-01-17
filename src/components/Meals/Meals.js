import Card from "../UI/Card"
import styles from './Meals.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from "../../store/cart-slice"
import MealsOrder from "./MealsOrder"
import diavola from '../../images/Diavola.png'
import marg from '../../images/Marga.png'
import prosciutto from '../../images/Prosciutto.png'

const DUMMY_MEALS = [
    {
        id: 1,
        name: 'Marinera',
        ingredients: 'tomato sauce',
        price: 10,
        quantity: 1,
        img: marg
    },

    {
        id: 2,
        name: 'Margherita',
        ingredients: 'cheese, tomato sauce and champignons',
        price: 13,
        quantity: 1,
        img: diavola
        
    },

    {
        id: 3,
        name: 'Diavola',
        ingredients: 'cheese, tomato sauce, corn, peppers',
        price: 18,
        quantity: 1,
        img: prosciutto
        
    }
]

const Meals = () => {
   const dispatch = useDispatch()


   const onAddToCart = (meal) => {
        dispatch(cartActions.addItemToCart(meal))
        
   }

    


    return (
        <div className={styles.meals}>
            {DUMMY_MEALS.map(meal => 
            <Card key={meal.id}>
                <div className={styles['meal-item']}>
                    <div className={styles['meal-detail']}>
                        <h3>{meal.name}</h3>
                        <p>{meal.ingredients}</p>
                        <img alt="pizza-img" src={meal.img} />
                    </div>
                    <div className={styles['meal-detail']}>
                        <p>{meal.price}$</p>
                        <MealsOrder onAddToCart={onAddToCart.bind(null, meal)} />
                    </div>  
                    
                </div>
               
            </Card>)}
        </div>
        
    )
}

export default Meals