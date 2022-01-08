

const MealsOrder = (props) => {

    const formSubmitHandler = (e) => {
        e.preventDefault()
        props.onOrder()
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <button type="submit">Order</button>
        </form>
    )
}

export default MealsOrder