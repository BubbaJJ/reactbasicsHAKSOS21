import { Routing } from "./routes/Routes";
import { Navigation } from "./components/navigation/Navigation";
import { UserProvider } from "./shared/provider/UserProvider";
import "./shared/global/style.css";

function App() {
  return (
    <UserProvider>
      <Routing>
        <Navigation />
      </Routing>
    </UserProvider>
  );
}

export default App;
