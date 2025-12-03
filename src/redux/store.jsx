import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice.jsx";
import cartSlice from "./cartSlice.jsx";
const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
    },
});
export default store;