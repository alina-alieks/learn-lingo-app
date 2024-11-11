import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../farebase/farebase";
import { ref, get, update } from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    try {
      const teachersRef = ref(db, "teachers");
      const snapshot = await get(teachersRef);
      const teachersData = snapshot.val();

      // console.log(teachersData);

      if (!teachersData) {
        console.log("Дані відсутні.");
        return [];
      }

      const updatedTeachers = Object.keys(teachersData).map((key) => ({
        ...teachersData[key],
        id: teachersData[key].id || key,
      }));
      // console.log(updatedTeachers);

      const updates = {};
      updatedTeachers.forEach((teacher) => {
        updates[`${teacher.id}`] = teacher;
      });

      await update(teachersRef, updates);
      // console.log("Оновлені дані:", updatedTeachers);
      return updatedTeachers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
