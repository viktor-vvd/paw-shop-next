import { createSlice } from "@reduxjs/toolkit";
import { pageApi } from "@api/pageApi";

const initialState = {};
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    
  },
/*   extraReducers: (builder) => {
    builder.addMatcher(
        pageApi.endpoints.projectsGET.matchFulfilled,
      (state, { payload }) => {
        state.projectsList = payload;
      }
    );
  },
 */});

export const {  } = pageSlice.actions;
export default pageSlice.reducer;
