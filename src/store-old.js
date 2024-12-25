import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import CustomerReducer from "./features/customers/CustomerReducer";
import AccountReducer from "./features/accounts/AccountReducer";

const reducers = combineReducers({
  customer: CustomerReducer,
  account: AccountReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
