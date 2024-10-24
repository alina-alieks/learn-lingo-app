import css from "./Statistics.module.css";

export default function Statistics() {
  return (
    <ul className={css.wrap}>
      <li className={css.wrapItem} key="tutor">
        <p className={css.num}>32,000 +</p>
        <p className={css.text}>Experienced tutors</p>
      </li>
      <li className={css.wrapItem} key="reviews">
        <p className={css.num}>300,000 +</p>
        <p className={css.text}>5-star tutor reviews</p>
      </li>
      <li className={css.wrapItem} key="sub">
        <p className={css.num}>120 +</p>
        <p className={css.text}>Subjects taught</p>
      </li>
      <li className={css.wrapItem} key="national">
        <p className={css.num}>200 +</p>
        <p className={css.text}>Tutor nationalities</p>
      </li>
    </ul>
  );
}
