import SendOrderButton from './SendOrderButton'
import styles from './OrderForm.module.css'
import { useReducer } from 'react'



/*
code to check name: {val: '', 
        isValid: null, 
        validator: (name) => {
            if (name.trim().length > 0) {
                return {
                    val: this.val, 
                    isValid: true
                }
            } else {
                return {
                    val: this.val,
                    isValid: true
                }
            }
        }}, */


const initialReducerValue = {
    name: {
        val: '', 
        isValid: false, 
    },
    lastName: {
        vaL: '',
        isValid: null
    },
    phoneNumber: {
        val: '',
        isValid: null
    },
    city: {
        val: '',
        isValid: null,
    },
    street: {
        val: '',
        isValid: null
    },
    postal: {
        val: '',
        isValid: null
    },
    isFormValid: false
    
}

const OrderForm = () => {

    const orderReducer = (state, action) => {
        if (action.type === 'HANDLE TEXT CHANGE') {
            
            
            return {
                ...state,
                [action.field]: {
                    val: action.payload,
                    isValid: true 
                }
                
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
            <input onChange={changeTextHandler} id="name" name='name' type='text' />

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
            
            {<SendOrderButton isValid={formState.isValid} /> }
        </div>

        
    )
}

export default OrderForm