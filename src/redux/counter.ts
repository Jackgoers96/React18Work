// ducks pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //increment
    incremented(state) {
      //immer is an under the hood dealeo from reduxjs/toolkit that makes this ok
      state.value++;
    },

    decremented(state) {
      state.value--;
    },

    reset(state) {
      state.value = 0;
    },
  },
});

export const { incremented, decremented, reset } = counterSlice.actions;
export default counterSlice.reducer;
