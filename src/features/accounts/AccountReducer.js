import { createSlice } from "@reduxjs/toolkit";

// Initial state for the account
const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: accountInitialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, loanMsg) {
        return { payload: { amount, loanMsg } };
      },
      reducer: (state, action) => {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.loanMsg;
        state.balance += action.payload.amount;
      },
    },
    payLoan: (state) => {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency: (state) => {
      state.isLoading = true;
    },
  },
});
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`);
    const data = await res.json();
    dispatch({ type: "account/deposit", payload: data.rates.USD * amount });
  };
}
const accountReducer = accountSlice.reducer;
export default accountReducer;
