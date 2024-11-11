import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  reducers: {
    addToFavorite(state, action) {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorite(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = slice.actions;

export default slice.reducer;
