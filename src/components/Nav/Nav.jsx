import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <Link className="n1" to="/login">Login</Link>
            <Link className="n1" to="/">Home</Link>
            <Link className="n1" to="/about">About</Link>
            <Link className="n1" to="/contact">Contact</Link>
            <Link className="n1" to="/project">Project</Link>
            <Link className="n1" to="/projectcreate">Create New Project</Link>
        </nav>
    );
}

export default Nav;