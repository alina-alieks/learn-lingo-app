import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import logo from "../../../public/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className={css.logoLink}>
      <img src={logo} alt="Logo" />
      <p>LearnLingo</p>
    </Link>
  );
}
