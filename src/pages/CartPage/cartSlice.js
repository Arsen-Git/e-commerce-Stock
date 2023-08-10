import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  wishlist: [],
  type: "cart",
  paymentAmount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items.find((elem) => elem.id === action.payload.id)
        ? (state.items = state.items)
        : state.items.push(action.payload);
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCartItems: (state) => {
      state.items = [];
    },
    addWishlistItem: (state, action) => {
      state.wishlist.find((elem) => elem.id === action.payload.id)
        ? (state.wishlist = state.wishlist)
        : state.wishlist.push(action.payload);
    },
    removeWishlistItem: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    changeCartType: (state, action) => {
      state.type = action.payload;
    },
    setPaymentAmount: (state, action) => {
      state.paymentAmount = action.payload;
    },
  },
});

export const {
  addCartItem,
  changeCartType,
  removeCartItem,
  addWishlistItem,
  removeWishlistItem,
  setPaymentAmount,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
