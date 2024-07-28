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
      // console.log(action);
      state.gheBanChon.push(action.payload);
      state.tongTien = state.gia += action.payload.gia;
      // console.log(state.tongTien);
    },
    removeSeat: (state, action) => {
      let deletedSeat = action.payload.soGhe;
      state.gheBanChon = state.gheBanChon.filter(
        (item) => item.soGhe !== deletedSeat
      );
      state.tongTien = state.tongTien - action.payload.gia;
    },
  },
});

export const { addSeat, removeSeat } = bookingSlice.actions;

export default bookingSlice.reducer;
