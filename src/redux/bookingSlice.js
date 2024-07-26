// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gheBanChon: [],
  gia: 0,
  isSelected: false,
  tongTien: "",
};

const bookingSlice = createSlice({
  name: "selectedSeat",
  initialState,
  reducers: {
    addSeat: (state, action) => {
      console.log(action);
      console.log(state);
      state.gheBanChon.push(action.payload);
      //   state.daDat = action.payload.daDat;
      action.payload.daDat = true;
      state.tongTien = state.gia += action.payload.gia;
      console.log(state.tongTien);
    },
  },
});

export const { addSeat } = bookingSlice.actions;

export default bookingSlice.reducer;
