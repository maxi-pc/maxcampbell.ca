import React from "react";
import { Rotate } from "react-awesome-reveal";
import { Link } from "react-scroll";

//var num = 50vh;

const HeroNav = () => {
  return (
    <>

    <div className="heroNav">
<Rotate delay="100">
            <ul className="heroLinkContainer">
            <li className="heroLinks"> <Link
            activeClass="active"
            to="hero-one"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Intro
          </Link></li>
            <li className="heroLinks"><Link
            activeClass="active"
            to="hero-two"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Toolbox
          </Link></li>
            <li className="heroLinks"><Link
            activeClass="active"
            to="hero-three"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           Web Tech
          </Link></li>
            <li className="heroLinks"><Link
            activeClass="active"
            to="hero-four"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Info
          </Link></li>
           </ul></Rotate>
    </div>  


    </>
  );
};

export default HeroNav;
