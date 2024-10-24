import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  return (
    <nav className={css.wrapperNav}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={getNavLinkClass}>
        Teachers
      </NavLink>
      <NavLink to="/favorites" className={getNavLinkClass}>
        Favorites
      </NavLink>
    </nav>
  );
}
