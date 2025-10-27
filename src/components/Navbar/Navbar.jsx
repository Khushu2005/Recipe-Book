import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink className={({ isActive }) => (isActive ? "active" : "not-active")} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : "not-active")}  to="/about">About</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : "not-active")}  to="/recipes">Recipes</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : "not-active")} to="/create-recipes">Create Recipes</NavLink>
    </div>
  );
};

export default Navbar;
