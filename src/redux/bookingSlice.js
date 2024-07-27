// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gheBanChon: [],
  gia: 0,
  tongTien: "",
};

const bookingSlice = createSlice({
  name: "selectedSeat",
  initialState,
  reducers: {
    addSeat: (state, action) => {
      console.log(action);
      state.gheBanChon.push(action.payload);
      action.payload.daDat = true;
      state.tongTien = state.gia += action.payload.gia;
      // console.log(state.tongTien);
    },
    removeTicket: (state, action) => {
      console.log(action);
    },
  },
});

export const { addSeat, removeTicket } = bookingSlice.actions;

export default bookingSlice.reducer;
