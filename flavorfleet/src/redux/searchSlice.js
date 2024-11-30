// searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    queryString: "",
  },
  reducers: {
    setQueryString: (state, action) => {
      state.queryString = action.payload;
    },
  },
});

export const { setQueryString } = searchSlice.actions;
export default searchSlice.reducer;
