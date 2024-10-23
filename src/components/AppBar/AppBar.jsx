import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={css.wrapperBar}>
      <Logo />
      <Navigation />
      <AuthNav />
    </div>
  );
}
