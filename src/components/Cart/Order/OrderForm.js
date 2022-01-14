import SendOrderButton from './SendOrderButton'
import styles from './OrderForm.module.css'
import { useReducer } from 'react'

const initialReducerValue = {
    name: '',
    lastName: '',
    phoneNumber: '',
    city: '',
    street: '',
    postal: '',
    isValid: false
}

const OrderForm = () => {

    const orderReducer = (state, action) => {
        if (action.type === 'HANDLE TEXT CHANGE') {
            state.isValid = action.field.trim().length > 0
            if (action.field === 'phoneNumber') {
                state.isValid = action.field.trim().length === 9
            }
            if (action.field === 'postal') {
                state.isValid = action.field.trim().length === 5
            }
            return {
                ...state,
                [action.field]: action.payload
            }
        }
    }

    const [formState, formDispatch] = useReducer(orderReducer, initialReducerValue)
    console.log(formState)

    const changeTextHandler = (e) => {
        formDispatch({
            type: 'HANDLE TEXT CHANGE',
            field: e.target.name,
            payload: e.target.value
        })
    }

    return (
        <div className={styles.orderForm}>
            <label htmlFor='name'>Name</label>
            <input onChange={changeTextHandler} className={styles.flext} id="name" name='name' type='text' />

            <label htmlFor='lastName'>Last Name</label>
            <input onChange={changeTextHandler} id="lastName" name='lastName' type='text' />

            <label htmlFor='phoneNumber'>Phone Number</label>
            <input onChange={changeTextHandler} id="phoneNumber" name='phoneNumber' type='number' />

            <label htmlFor='city'>City</label>
            <input onChange={changeTextHandler} id="city" name='city' type='text' />

            <label htmlFor='street'>Street</label>
            <input onChange={changeTextHandler} id="street" name='street' type='text' />

            <label htmlFor='postal'>Postal Code</label>
            <input onChange={changeTextHandler} id="postal" name='postal' type='text' />
            
            {formState.isValid && <SendOrderButton /> }
        </div>

        
    )
}

export default OrderForm