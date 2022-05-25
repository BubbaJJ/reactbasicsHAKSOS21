import { Link, useNavigate } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import "./NavigationDesktop.css";

export const NavigationDesktop = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-desktop">
      <span className="nav-desktop-logo">Logo</span>
      <ul className="nav-desktop-list">
        <li>
          <Link to={RoutingPath.homeView}>Home</Link>
        </li>
        <li>
          <Link to={RoutingPath.signInView}>Sign in</Link>
        </li>
        <li>
          <Link to={RoutingPath.storeView}>Store</Link>
        </li>
        <li>
          <button onClick={() => navigate(RoutingPath.homeView)}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate(RoutingPath.signInView)}>
            Sign in
          </button>
        </li>
        <li>
          <button onClick={() => navigate(RoutingPath.storeView)}>Store</button>
        </li>
      </ul>
    </nav>
  );
};
