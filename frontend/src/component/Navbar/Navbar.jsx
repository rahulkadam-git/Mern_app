import React from "react";
import Logout from "../buttons/Logout";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <h3 className="nav-heading">Employee portal</h3>
        <Logout />
      </nav>
    </header>
  );
}
