import SendOrderButton from './SendOrderButton'
import styles from './OrderForm.module.css'
import { useState, useReducer, useEffect } from 'react'



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
        isValid: false
    },
    phoneNumber: {
        val: '',
        isValid: false
    },
    city: {
        val: '',
        isValid: false,
    },
    street: {
        val: '',
        isValid: false
    },
    postal: {
        val: '',
        isValid: false
    },
    
}

const OrderForm = () => {

    const orderReducer = (state, action) => {
        if (action.type === 'HANDLE TEXT CHANGE') {
            let inputIsValid = false
            if (action.payload.trim().length === 0) inputIsValid = false 
            if (action.payload.trim().length > 0) inputIsValid = true
            
            return {
                ...state,
                [action.field]: {
                    val: action.payload,
                    isValid: inputIsValid 
                }
                
            }
        }
    }
    


    const [formState, formDispatch] = useReducer(orderReducer, initialReducerValue)
    const [formIsValid, setFormIsValid] = useState(false)

    const changeTextHandler = (e) => {
        formDispatch({
            type: 'HANDLE TEXT CHANGE',
            field: e.target.name,
            payload: e.target.value
        })
    }
    
    useEffect(() => {
        const validationArray = []
        for (const key of Object.keys(formState)) {
            validationArray.push(formState[key].isValid)
         }

        const isTrue = validationArray.every(item => item)
        setFormIsValid(isTrue)
    }, [formState])
   
    

    
   


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
            
            {<SendOrderButton isValid={formIsValid} /> }
        </div>

        
    )
}

export default OrderForm