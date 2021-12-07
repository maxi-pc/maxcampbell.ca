import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navigation } from '../../theme';
import { DarkToggler } from '../DarkToggler';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink to="/" activeStyle>
              <li>home</li>
            </NavLink>
            <NavLink to="/Portfolio" activeStyle>
              <li>Portfolio</li>
            </NavLink>
            <NavLink to="/about" activeStyle>
              <li>about</li>
            </NavLink>
            <NavLink to="/contact" activeStyle>
              <li>contact</li>
            </NavLink>
           
         <DarkToggler/>

          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default NavBar;
