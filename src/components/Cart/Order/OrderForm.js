import styles from './OrderForm.module.css'


const OrderForm = () => {
    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input id="name" type='text' />

            <label htmlFor='lastName'>Last Name</label>
            <input id="lastName" type='text' />

            <label htmlFor='phoneNumber'>Phone Number</label>
            <input id="phoneNumber" type='number' />

            <label htmlFor='city'>City</label>
            <input id="city" type='text' />

            <label htmlFor='street'>Street</label>
            <input id="street" type='text' />

            <label htmlFor='postal'>Postal Code</label>
            <input id="postal" type='text' />
        </div>
    )
}

export default OrderForm