import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

const slice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    lastKey: null,
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
        const newTeachers = action.payload.teachers;
        const newItems = newTeachers.filter((teacher) =>
          state.items.every((item) => item.id !== teacher.id)
        );
        state.items = [...state.items, ...newItems];
        state.lastKey = action.payload.lastKey;
        state.totalItems = action.payload.length;
        state.loading = false;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default slice.reducer;
