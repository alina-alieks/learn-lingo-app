import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

const slice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    totalItems: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.totalItems = action.payload.length;
        state.loading = false;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default slice.reducer;
