import orderReducer from "./slices/orderSlice";
import { configureStore } from "@reduxjs/toolkit";  // Add this line
import authReducer from "./slices/authSlice";       // Add this line
import cartReducer from "./slices/cartSlice";       // Add this line


export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer
  }
});
