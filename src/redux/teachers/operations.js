import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../farebase/farebase";
import {
  ref,
  get,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
} from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async ({ page, limit, lastKey }, thunkAPI) => {
    try {
      const teachersRef = ref(db, "teachers");

      let teachersQuery = query(teachersRef, orderByKey(), limitToFirst(limit));
      if (page > 1 && lastKey) {
        teachersQuery = query(
          teachersRef,
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(limit)
        );
      }

      const snapshot = await get(teachersQuery);
      const teachersData = snapshot.val();

      if (!teachersData) {
        console.log("Дані відсутні.");
        return { teachers: [], lastKey: null };
      }

      const updatedTeachers = Object.keys(teachersData).map((key) => ({
        ...teachersData[key],
        id: key,
      }));

      const newLastKey =
        Object.keys(teachersData)[Object.keys(teachersData).length - 1];

      return { teachers: updatedTeachers, lastKey: newLastKey };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
