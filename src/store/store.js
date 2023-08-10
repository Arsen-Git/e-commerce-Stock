import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "../components/header/filterSlice";
import cartSlice from "../pages/CartPage/cartSlice";
import userSlice from "../pages/SignPage/userSlice";

export const store = configureStore({
  reducer: {
    activeFilter: filterSlice,
    cart: cartSlice,
    user: userSlice,
  },
});
