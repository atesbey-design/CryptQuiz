import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popUp: false,
};

export const uislice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    popUpOn: (state) => {
      state.popUp = true;
    },
    popUpOff: (state) => {
      state.popUp = false;
    },
  },
});

export const { popUpOn, popUpOff } = uislice.actions;
export default uislice.reducer;