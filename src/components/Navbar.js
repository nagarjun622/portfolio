import React from "react";
import { Link } from "react-router-dom";

function Navbar({ toggleTheme }) {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Navbar;