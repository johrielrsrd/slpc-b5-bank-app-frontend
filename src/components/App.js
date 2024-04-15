import "../styles/App.css";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import LogIn from "./LogIn";
import Registration from "./Registration";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <ul className="navigationBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
