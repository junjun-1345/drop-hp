import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
  name: "plan",
  initialState: {
    name: "",
    fee: 0,
    flag: false,
  },
  reducers: {
    twinCul: (state) => {
      state.name = "ツイン";
      state.fee = 13000;
      state.flag = false;
    },
    tripleCul: (state) => {
      state.name = "トリプル";
      state.fee = 26000;
      state.flag = true;
    },
  },
});

export const { twinCul, tripleCul } = planSlice.actions;
export default planSlice.reducer;
