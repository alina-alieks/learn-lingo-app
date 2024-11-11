import TeachersItem from "../TeachersItem/TeachersItem";
// import teachers from "../../teachers.json";

import Button from "../Button/Button";

import css from "./TeachersList.module.css";
import { useSelector } from "react-redux";
import { selectAllTeachers } from "../../redux/teachers/selectors";

export default function TeachersList() {
  const teachers = useSelector(selectAllTeachers);
  // console.log(teachers);

  return (
    <>
      <ul className={css.list}>
        {teachers.map((item) => {
          return (
            <li className={css.listItem} key={item.id}>
              <TeachersItem teacher={item} />
            </li>
          );
        })}
      </ul>
      <div className={css.btnLoad}>
        <Button text="Load more" />
      </div>
    </>
  );
}
