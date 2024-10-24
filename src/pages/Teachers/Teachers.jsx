import Filters from "../../components/Filters/Filters";
import TeachersList from "../../components/TeachersList/TeachersList";

import css from "./Teachers.module.css";

export default function Teachers() {
  return (
    <>
      <Filters />
      <TeachersList />
    </>
  );
}
