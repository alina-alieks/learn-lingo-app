import { configureStore } from "@reduxjs/toolkit";
import teachers from "./teachers/slice";
// import filters from "./filters/slice";
// import favorites from "./favorites/slice";
// import auth from "./auth/slice";

export const store = configureStore({
  reducer: {
    // auth,
    teachers,
    // filters,
    // favorites,
  },
});
