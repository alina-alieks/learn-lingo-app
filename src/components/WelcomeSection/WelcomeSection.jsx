import Button from "../Button/Button";
import mainPicture from "../../images/mainPicture.png";
import mainPictureRetina from "../../images/mainPicture@2x.png";
import css from "./WelcomeSection.module.css";

export default function WelcomeSection() {
  return (
    <div className={css.wrap}>
      <div className={css.wrapWelcomeText}>
        <h1 className={css.mainText}>
          Unlock your potential with the best{" "}
          <span className={css.textItalic}> language </span> tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Button path="/teachers" text="Get started" />
      </div>
      <div className={css.wrapImg}>
        <img
          srcSet={`${mainPictureRetina} 2x`}
          src={mainPicture}
          alt="Girl with laptop"
          className={css.img}
          width="568"
        />
      </div>
    </div>
  );
}
