import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/productSlice.js";
import userReducer from "../Slices/usersSlice.js";

const store = configureStore({
  reducer:{
    products: productReducer,
    users: userReducer,
  }
})
export default store;