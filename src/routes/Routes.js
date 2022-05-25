import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importerar 3 funktioner från react-router.dom.
import { HomeView } from "../view/HomeView/HomeView";
import { SignInView } from "../view/SignInView/SignInView";
import RoutingPath from "./RoutingPath";

export const Routing = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route exact path={RoutingPath.signInView} element={<SignInView />} />
        <Route path={RoutingPath.homeView} element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};