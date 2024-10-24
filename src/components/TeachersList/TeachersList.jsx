import TeachersItem from "../TeachersItem/TeachersItem";
import teachers from "../../teachers.json";
import { nanoid } from "nanoid";
import css from "./TeachersList.module.css";
import Button from "../Button/Button";

export default function TeachersList() {
  console.log(teachers);
  return (
    <>
      <ul className={css.list}>
        {teachers.map((item) => {
          item.id = nanoid();
          // console.log(item);
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
