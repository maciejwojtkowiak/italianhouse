// użyj akcji do asynchronicznych akcji

const fetchCartData = () => {
    return async (dispatch) => {
        fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/orders.json')
        .then(res => res.json()).then(data => console.log(data))
    }
}