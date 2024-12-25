import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./features/customers/CustomerReducer";
import AccountReducer from "./features/accounts/AccountReducer";

const store = configureStore({
  reducer: {
    customer: CustomerReducer,
    account: AccountReducer,
  },
});

export default store;
