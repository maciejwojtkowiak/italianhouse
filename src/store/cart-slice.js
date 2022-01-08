import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [],
    totalAmount: 0,
    pizza: 'marga'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            state.items =+ action.payload.item
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice