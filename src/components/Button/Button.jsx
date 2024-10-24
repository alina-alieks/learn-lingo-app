import { Link } from "react-router-dom";
import css from "./Button.module.css";

export default function Button({ path = "", text }) {
  return path ? (
    <Link to={path} className={css.button}>
      {text}
    </Link>
  ) : (
    <button className={css.button} type="submit">
      {text}
    </button>
  );
}
