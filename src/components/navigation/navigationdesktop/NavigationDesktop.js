import { Link, useNavigate } from "react-router-dom";
import "./NavigationDesktop.css";

export const NavigationDesktop = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-desktop">
      <span className="nav-desktop-logo">Logo</span>
      <ul className="nav-desktop-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/signin")}>Sign in</button>
        </li>
      </ul>
    </nav>
  );
};
