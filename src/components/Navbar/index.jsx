

import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from '../../theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DarkToggler } from '../DarkToggler';

const Navbar = () => {

return (
  
        <>
   <Nav> 
          

     <Bars />
    <NavMenu>
       <NavLink to="/" activeStyle>
             Home
         </NavLink>
      <NavLink to="/portfolio" activeStyle>
             Portfolio
         </NavLink>
       <NavLink to="/about" activeStyle>
             About
         </NavLink>
       <NavLink to="/contact" activeStyle>
             Contact
         </NavLink>
     </NavMenu>
     <DarkToggler/>
      </Nav>
       </>
    );
};

export default Navbar;
