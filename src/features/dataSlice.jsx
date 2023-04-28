import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "veri",

  initialState: {
    api: null,
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail } = dataSlice.actions;

export default dataSlice.reducer;
