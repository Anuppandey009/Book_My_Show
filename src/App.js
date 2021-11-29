import "./styles.css";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/Homepage";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/homepage">
        <HomePage />
      </Route>
    </div>
  );
}
