import { Link } from "react-router-dom";
import css from "./Button.module.css";

export default function Button({ path = "", text, type = "submit", onClick }) {
  return path ? (
    <Link to={path} className={css.button}>
      {text}
    </Link>
  ) : (
    <button
      className={css.button}
      type={type}
      onClick={type !== "submit" ? onClick : undefined}
    >
      {text}
    </button>
  );
}
