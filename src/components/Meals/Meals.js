import Card from "../UI/Card"
import styles from './Meals.module.css'

const Meals = () => {

    const DUMMY_MEALS = [
        {
            name: 'Margarita',
            ingredients: 'cheese and tomato sauce',
            price: 10
        },

        {
            name: 'Funghi',
            ingredients: 'cheese, tomato sauce and champignons',
            price: 15
        },

        {
            name: 'Vegetarian',
            ingredients: 'cheese, tomato sauce, corn, peppers',
            price: 13
        }
    ]


    return (
        <div className={styles.meals}>
            {DUMMY_MEALS.map(meal => 
            <Card>
                <div>
                    <h3>{meal.name}</h3>
                    <p>{meal.ingredients}</p>
                    <p>{meal.price}$</p>
                </div>
            </Card>)}
        </div>
        
    )
}

export default Meals