import { NavLink, Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <nav>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
