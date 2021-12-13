import React from "react";
import { DarkToggler } from "../DarkToggler";
import { NavLink as Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav-me">
        <ul className="ul-me">
          <li className="li-me">
            <Link to="/" activeStyle>home</Link>
          </li>
          <li className="li-me"><Link to="/portfolio" activeStyle>Portfolio</Link></li>
          <li className="li-me"><Link to="/about" activeStyle>About</Link></li>
          <li className="li-me"><Link to="/contact" activeStyle>Contact</Link></li>
          <li className="li-me">
            <DarkToggler />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
