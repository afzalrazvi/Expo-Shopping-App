import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/cartReducer";

export default configureStore({
  reducer:{
    cart:CartReducer,
  },
});
