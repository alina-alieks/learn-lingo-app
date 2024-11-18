import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectAllTeachers } from "../../redux/teachers/selectors";

import css from "./TeacherDetails.module.css";

export default function TeacherDetails() {
  const { id } = useParams();
  const teachers = useSelector(selectAllTeachers);
  const teacher = teachers.find((item) => item.id === id);

  return (
    <div className={css.wrap}>
      <p className={css.textExperience}>{teacher.experience}</p>
      <ul className={css.listReviewer}>
        {teacher.reviews.map((review, i) => (
          <li className={css.item} key={i}>
            <div className={css.wrapReviewer}>
              <div className={css.wrapImg}>
                <p className={css.textAvatar}>{review.reviewer_name[0]}</p>
              </div>
              <div className={css.infoReviewer}>
                <p className={css.name}>{review.reviewer_name}</p>
                <p className={css.rating}>
                  <FaStar className={css.star} />
                  <span>{review.reviewer_rating}</span>
                </p>
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
