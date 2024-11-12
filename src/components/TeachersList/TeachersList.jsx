import TeachersItem from "../TeachersItem/TeachersItem";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectAllTeachers,
  selectLastKey,
} from "../../redux/teachers/selectors";
import { fetchTeachers } from "../../redux/teachers/operations";

import css from "./TeachersList.module.css";

export default function TeachersList() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);
  const lastKey = useSelector(selectLastKey);
  // console.log(lastKey);

  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const limit = 4;

  useEffect(() => {
    const loadInitialTeachers = async () => {
      const response = await dispatch(
        fetchTeachers({ page: 1, limit, lastKey: null })
      ).unwrap();
      if (response.teachers.length < limit) {
        setIsLoadMore(false);
      }
    };
    loadInitialTeachers();
  }, [dispatch, limit]);

  const handleClick = async () => {
    const response = await dispatch(
      fetchTeachers({ page: page + 1, limit, lastKey })
    ).unwrap();
    setPage((prevPage) => prevPage + 1);

    if (response.teachers.length < limit) {
      setIsLoadMore(false);
    }
  };

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
      {isLoadMore && (
        <div className={css.btnLoad}>
          <Button text="Load more" type="button" onClick={handleClick} />
        </div>
      )}
    </>
  );
}
