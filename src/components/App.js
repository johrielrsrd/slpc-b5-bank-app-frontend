import "../styles/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import Registration from "./Registration";
import { useState } from "react";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
