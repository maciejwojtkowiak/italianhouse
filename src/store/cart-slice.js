import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    items: [],
    totalAmount: 0,
    cartIsShown: false,
    changed: false,
    added: false,
    orderIsSent: false,
    orderIsShown: false,
    fetchingCart: false
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
            state.added = true
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
            state.added = true
            
        },

        // 'added' property is changed here
        removeItemFromCart(state, action) {
            const itemToDeletion = state.items.find(item => item.id === action.payload)
            if (itemToDeletion.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload)
            } else {
                itemToDeletion.quantity--
                itemToDeletion.totalPrice = [itemToDeletion.quantity * itemToDeletion.price]
            }

            state.totalAmount--
            state.changed = true
            state.added = false
            
            
        },

        showCart(state) {
            state.cartIsShown = !state.cartIsShown

        },

        orderIsSent(state, action) {
            state.orderIsSent = action.payload
        },

        orderIsShown(state, action) {
            state.orderIsShown = action.payload
        },

        isCartBeingFetched(state, action) {
            state.fetchingCart = action.payload
        }


       
    }
})


export const cartActions = cartSlice.actions
export default cartSlice