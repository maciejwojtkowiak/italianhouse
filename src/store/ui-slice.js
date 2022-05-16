import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  notificationIsShown: false,
  notification: {
    message: null,
    type: null,
  },

  orderIsShown: false,
  cartIsShown: false,
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: INITIAL_VALUE,
  reducers: {
    showNotification(state, action) {
      state.notificationIsShown = true;
      state.notification.message = action.payload.message;
      state.notification.type = action.payload.type;
    },

    hideNotification(state) {
      state.notificationIsShown = false;
    },

    showCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },

    orderIsShown(state, action) {
      state.orderIsShown = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
