import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [],
    totalAmount: 0,
    cartIsShown: false,
    changed: false,
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
            state.changed = true
            
        },


        removeItemFromCart(state, action) {
            const itemToDeletion = state.items.find(item => item.id === action.payload)
            state.items = state.items.filter(item => item.id !== action.payload)
            
        },

        showCart(state) {
            state.cartIsShown = !state.cartIsShown
        },


       
    }
})


export const cartActions = cartSlice.actions
export default cartSlice