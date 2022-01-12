import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [],
    totalAmount: 0,
    cartIsShown: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        getCartData(state,action) {

            state.items.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity,
                totalPrice: action.payload.price * action.payload.quantity,
            })
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
                    totalPrice: action.payload.totalPrice,
                    quantity: action.payload.quantity
                })
            }

            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            }

            ++state.totalAmount
            
        },

        showCart(state, action) {
            state.cartIsShown = !state.cartIsShown
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice