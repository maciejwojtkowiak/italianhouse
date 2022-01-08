import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [],
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.items.find(existingItem => existingItem.id === action.payload.id)
            if (!existingItem) {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    totalPrice: action.payload.price,
                    quantity: 1
                })
            }

            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            }

            state.totalAmount++
            
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice