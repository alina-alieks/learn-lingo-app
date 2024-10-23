import { FaArrowRightToBracket } from "react-icons/fa6";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.authNavWrap}>
      <button type="button" className={css.logIn}>
        <FaArrowRightToBracket className={css.iconArrow} />
        Log in
      </button>
      <button type="button" className={css.registration}>
        Registration
      </button>
    </div>
  );
}
