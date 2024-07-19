import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "./features/userProfileSlice";
import productReducer from "./features/productSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      userProfile: userProfileReducer,
      products: productReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
