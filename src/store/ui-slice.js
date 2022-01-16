import {createSlice} from '@reduxjs/toolkit'

const INITIAL_VALUE = {
    notificationIsShown: false
}



const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: INITIAL_VALUE,
    reducers: {
        showNotification(state) {
            state.notificationIsShown = true
        },

        hideNotification(state) {
            state.notificationIsShown = false
        }
    }
})