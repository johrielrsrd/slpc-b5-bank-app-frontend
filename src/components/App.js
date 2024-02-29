import "../styles/App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import { useState } from "react";
import Home from "./Home";

function App() {
  return (
    <Router>
      <ul>
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
      </Routes>
    </Router>
  );
}

export default App;
