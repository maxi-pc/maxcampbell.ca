import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "../../theme";
import { DarkToggler } from "../DarkToggler";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  

  render() {
    const { isExpanded } = this.state;
    return (
      <Navigation>
        <div className="logo"></div>
        <nav className="nav" tabIndex="0">
          {isExpanded ? (
            <IoMdClose
              className="fabars"
              size="39px"
              aria-hidden="true"
              color="white"
              onClick={(e) => this.handleToggle(e)}
            />
          ) : (
            <FaBars
              className="fabars"
              size="31px"
              aria-hidden="true"
              onClick={(e) => this.handleToggle(e)}
            />
          )}
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink to="/" activeStyle>
              <li>home</li>
            </NavLink>
            <NavLink to="/Portfolio" activeStyle>
              <li>Portfolio</li>
            </NavLink>
            <NavLink to="/about" activeStyle>
              <li>About</li>
            </NavLink>
            <NavLink to="/contact" activeStyle>
              <li>Contact</li>
            </NavLink>

            <DarkToggler />
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default NavBar;
