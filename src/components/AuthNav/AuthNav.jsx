import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <button type="button" className={css.logIn}>
        Log in
      </button>
      <button type="button" className={css.registration}>
        Registration
      </button>
    </div>
  );
}
