import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <h2>Header</h2>
      <nav className="header-nav">
        <ul className="header-nav__ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
