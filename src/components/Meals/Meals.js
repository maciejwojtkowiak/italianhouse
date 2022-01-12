import Card from "../UI/Card"
import styles from './Meals.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from "../../store/cart-slice"
import MealsOrder from "./MealsOrder"
import { useEffect } from "react"

const DUMMY_MEALS = [
    {
        id: 1,
        name: 'Margarita',
        ingredients: 'cheese and tomato sauce',
        price: 10,
        quantity: 1
    },

    {
        id: 2,
        name: 'Funghi',
        ingredients: 'cheese, tomato sauce and champignons',
        price: 15,
        quantity: 1
    },

    {
        id: 3,
        name: 'Vegetarian',
        ingredients: 'cheese, tomato sauce, corn, peppers',
        price: 13,
        quantity: 1
    }
]

const Meals = () => {
   const dispatch = useDispatch()
   const cartItems = useSelector(state => state.cart.items)
   const totalAmount = useSelector(state => state.cart.totalAmount)
   console.log(totalAmount)

   const onAddToCart = (meal) => {
        fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
            method: 'PUT',
            body: JSON.stringify({cartItems: cartItems, totalAmount: totalAmount}),
            headers: {
                'content-type': 'application/json'
            }

        })
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