

const MealsOrder = (props) => {

    const formSubmitHandler = (e) => {
        e.preventDefault()
        props.onAddToCart()
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <button type="submit">Add to cart</button>
        </form>
    )
}

export default MealsOrder