import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    cartItems: any[];
    products: any[];
}

const INITIAL_STATE: InitialState = {
    cartItems: [],
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const existingItem: any = state.cartItems?.find((item) => item.sku_code === action.payload.sku_code);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const payload = {
                    ...action.payload,
                    quantity: 1
                }
                state.cartItems.push(payload);
            }
        },
        cartIncrement: (state, action) => {
            const incrementItem: any = state.cartItems?.find(item => item.sku_code === action.payload?.sku_code);
            if (incrementItem) {
                incrementItem.quantity += 1;
            }
        },
        cartDecrement: (state, action) => {
            const decrementItem: any = state.cartItems?.find(item => item.sku_code === action.payload?.sku_code);
            if (decrementItem && decrementItem.quantity > 1) {
                decrementItem.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(item => item.sku_code !== action.payload?.sku_code);
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.sku_code !== action.payload?.sku_code);
        },
        getProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const {
    addToCart,
    cartIncrement,
    cartDecrement,
    removeFromCart,
    getProducts
} = cartSlice?.actions;
export default cartSlice?.reducer;