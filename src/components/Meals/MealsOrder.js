import styles from './MealsOrder.module.css'

const MealsOrder = (props) => {

    const formSubmitHandler = (e) => {
        e.preventDefault()
        props.onAddToCart()
    }
    return (
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <button type="submit">Add to cart</button>
        </form>
    )
}

export default MealsOrder