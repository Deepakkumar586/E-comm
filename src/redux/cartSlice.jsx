import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],

}

const cartSlice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        setCarts(state, action) {
            state.carts = action.payload;

        }


    },


})

export const { setCarts } = cartSlice.actions;
export default cartSlice.reducer;