// Old code

// import { createStore } from "redux";

// const customerInitialState = {
//   fullName: "",
//   nationalId: "",
//   createdAt: "",
// };

// export default function CustomerReducer(state = customerInitialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: new Date().toISOString(),
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return { type: "customer/createCustomer", payload: { fullName, nationalId } };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: { fullName } };
// }

import { createSlice } from "@reduxjs/toolkit";

const customerInitialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: customerInitialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return { payload: { fullName, nationalId, createdAt: new Date().toISOString() } };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

console.log(customerSlice);
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
