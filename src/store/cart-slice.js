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
            console.log(action.payload)
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice