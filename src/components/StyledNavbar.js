import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "blue" }
        }
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "blue" }
        }
      >
        Products
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
