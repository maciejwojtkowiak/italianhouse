import { useSelector } from "react-redux"

const SendOrderButton = () => {
    const cartItems = useSelector(state => state.cart.items)
    const onOrderHandler = (e) => {
        e.preventDefault()
        fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify(cartItems),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    return (
        <form>
        
            <button onClick={onOrderHandler} type="submit" >Send Order</button>
        </form>
    )
}

export default SendOrderButton