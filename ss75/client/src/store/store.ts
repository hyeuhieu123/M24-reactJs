import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";

const store: any = configureStore({
  reducer: {
    product: productsReducer,
  },
});

export default store;
