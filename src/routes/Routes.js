import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importerar 3 funktioner från react-router.dom.
import { HomeView } from "../view/HomeView/HomeView";
import { SignInView } from "../view/SignInView/SignInView";
import { StoreView } from "../view/StoreView/StoreView";
import { ProfileView } from "../view/authenticatedviews/profileview/ProfileView";
import { SettingsView } from "../view/authenticatedviews/settingsview/SettingsView";
import RoutingPath from "./RoutingPath";
import LocalStorage from "../shared/storage/LocalStorage";
import { useContext, useEffect } from "react";
import { UserContext } from "../shared/provider/UserProvider";

export const Routing = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const isUserAuthenticated = () => {
    const loggedInUser = localStorage.getItem(LocalStorage.username); // Hämtar värdet för username från localStorage.
    setAuthenticatedUser(loggedInUser);
  };

  useEffect(() => {
    isUserAuthenticated();
  }, []);

  // const blockIfAuthenticated = (view) => {
  //   if (authenticatedUser) {
  //     return <HomeView />;
  //   }
  //   return view;
  // };

  const blockIfAuthenticated = (view) => {
    return authenticatedUser ? <HomeView /> : view;
  };

  // const authenticationRequired = (view) => {
  //   if (authenticatedUser) {
  //     return view;
  //   }
  //   return <SignInView />;
  // };

  const authenticationRequired = (view) => {
    return authenticatedUser ? view : <SignInView />;
  };

  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path={RoutingPath.homeView} element={<HomeView />} />
        <Route
          exact
          path={RoutingPath.signInView}
          element={blockIfAuthenticated(<SignInView />)}
        />

        <Route exact path={RoutingPath.storeView} element={<StoreView />} />
        <Route
          exact
          path={RoutingPath.profileView}
          element={authenticationRequired(<ProfileView />)}
        />
        <Route
          exact
          path={RoutingPath.settingsView}
          element={authenticationRequired(<SettingsView />)}
        />
      </Routes>
    </BrowserRouter>
  );
};
