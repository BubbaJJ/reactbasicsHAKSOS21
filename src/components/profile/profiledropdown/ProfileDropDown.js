import "./ProfileDropDown.css";
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import LocalStorage from "../../../shared/storage/LocalStorage";

export const ProfileDropDown = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem(LocalStorage.username);
    setAuthenticatedUser(false);
    navigate(RoutingPath.homeView);
  };

  return (
    <div className="profiledropdown">
      <p>Name Name</p>
      <p>Email</p>
      <hr />
      <p onClick={() => navigate(RoutingPath.profileView)}>Profile</p>
      <p onClick={() => navigate(RoutingPath.settingsView)}>Settings</p>
      <p onClick={() => logOut()}>Log Out</p>
    </div>
  );
};
