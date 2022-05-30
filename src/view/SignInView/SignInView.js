import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage";
export const SignInView = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const [username, setUsername] = useState("Jim"); // Lagrar och uppdaterar username.
  const [password, setPassword] = useState(); // Lagrar och uppdaterar password.
  const navigate = useNavigate();

  const logIn = () => {
    setAuthenticatedUser(username); // Tilldelar värde till authenticatedUser.
    localStorage.setItem(LocalStorage.username, username); // key, value
    navigate(-1); // Tillbaka en sida i webbläsaren.
  };

  return (
    <div>
      <h1>SignInView</h1>
      <input
        placeholder="Enter username"
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <br />
      <input
        placeholder="Enter password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <br />
      <button onClick={() => logIn()}>Sign in</button>
    </div>
  );
};
