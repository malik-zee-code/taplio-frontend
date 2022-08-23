import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice";

const store = configureStore({
  reducer: { User: UserReducer },
});

export default store;
