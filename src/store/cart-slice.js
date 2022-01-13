import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [],
    totalAmount: 0,
    cartIsShown: false,
    cartIsFetched: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        replaceCart(state,action) {

            state.items = action.payload
        },

        setFetchedTotalAmount(state,action) {
            state.totalAmount = action.payload
        },

        addItemToCart(state, action) {
            const existingItem = state.items.find(existingItem => existingItem.id === action.payload.id)
            if (!existingItem) {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    totalPrice: action.payload.price,
                    quantity: action.payload.quantity
                })
            }

            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            }

            ++state.totalAmount
            
        },

        showCart(state) {
            state.cartIsShown = !state.cartIsShown
        },

        cartIsFetched(state) {
            state.cartIsFetched = true
        }

       
    }
})


export const cartActions = cartSlice.actions
export default cartSlice