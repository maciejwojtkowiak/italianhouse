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
        replaceCart(state,action) {
            if(action.payload) {
                state.items.push(action.payload)
            } else {
                state.items = []
            }
            
        },
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
            
        },

        showCart(state, action) {
            state.cartIsShown = !state.cartIsShown
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice