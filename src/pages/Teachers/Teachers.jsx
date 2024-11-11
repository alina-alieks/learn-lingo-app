import { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import TeachersList from "../../components/TeachersList/TeachersList";

import css from "./Teachers.module.css";
import { useDispatch } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";

export default function Teachers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <>
      <Filters />
      <TeachersList />
    </>
  );
}
