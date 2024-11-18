import clsx from "clsx";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  console.log(isHome);
  return (
    <div className={clsx(css.container, isHome && css.containerHome)}>
      <AppBar />
      {children}
    </div>
  );
}
