import { PiBookOpenBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import css from "./TeachersItem.module.css";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

export default function TeachersItem({ teacher }) {
  return (
    <div className={css.wrapItem}>
      <div className={css.wrapAvatar}>
        <div className={css.wrapImg}>
          <img className={css.img} src={teacher.avatar_url} alt="Avatar" />
        </div>
        <div className={css.circle}></div>
      </div>
      <div className={css.info}>
        <div className={css.headInfo}>
          <p className={css.listInfo}>Languages</p>
          <div className={css.headInfoDetails}>
            <p className={css.headInfoItem}>
              <PiBookOpenBold className={css.iconBook} />
              Lessons online
            </p>
            <p className={css.headInfoItem}>
              Lessons done: {teacher.lessons_done}
            </p>
            <p className={css.headInfoItem}>
              <FaStar className={css.star} />
              Rating: {teacher.rating}
            </p>
            <p className={css.headInfoItem}>
              Price / 1 hour:{" "}
              <span className={css.price_per_hour}>
                {teacher.price_per_hour}$
              </span>
            </p>
          </div>
        </div>
        <h2 className={css.name}>
          {teacher.name} {teacher.surname}
        </h2>
        <div className={css.wrapListInfo}>
          <p className={css.listInfo}>
            Speaks:{" "}
            <span className={css.textInfoSpeaks}>
              {teacher.languages.join(", ")}
            </span>
          </p>
          <p className={css.listInfo}>
            Lesson Info:{" "}
            <span className={css.textInfo}>{teacher.lesson_info}</span>
          </p>
          <p className={css.listInfo}>
            Conditions:{" "}
            <span className={css.textInfo}>{teacher.conditions.join(" ")}</span>
          </p>
        </div>
        <NavLink
          className={({ isActive }) =>
            clsx(css.btnMore, isActive && css.btnMoreActive)
          }
          to={`teachers/${teacher.id}`}
        >
          Read more
        </NavLink>
        <Outlet />
        <ul className={css.listLevel}>
          {teacher.levels.map((item, i) => (
            <li className={css.itemLevel} key={i}>
              # {item}
            </li>
          ))}
        </ul>
      </div>
      <FaRegHeart className={css.iconHeart} />
    </div>
  );
}
