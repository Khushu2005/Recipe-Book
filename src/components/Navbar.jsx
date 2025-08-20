import { NavLink } from "react-router-dom";
import "../styling/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="Navcontent">
      <NavLink
        to="/"
        data-label="Home"
          className={({ isActive }) => 
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/puffy-filled/50/FFFFFF/home.png"
          alt="home"
        />
      </NavLink>
      <NavLink
        to="/recipes"
          className={({ isActive }) => 
          isActive ? "nav-link active-link" : "nav-link"
        }
        data-label="Recipes"
      >
        <img
         width="28"
          height="28"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/cookbook.png"
          alt="cookbook"
        />
      </NavLink>
      <NavLink
        to="/about"
          className={({ isActive }) => 
          isActive ? "nav-link active-link" : "nav-link"
        }
        data-label="About"
      >
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/about.png"
          alt="about"
        />
      </NavLink>

      <NavLink
        to="/create"
          className={({ isActive }) => 
          isActive ? "nav-link active-link" : "nav-link"
        }
        data-label="Create"
      >
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/material/50/FFFFFF/plus--v1.png"
          alt="plus--v1"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
