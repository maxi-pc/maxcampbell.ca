import styled, { createGlobalStyle } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const GlobalStyles = createGlobalStyle`

html {font-size: 100%;} /*16px*/

body {
  background: white;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}

  body {
    margin: 0;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    position: relative;
    min-height: 100vh;
  }

  .footer {
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background:  ${({ theme }) => theme.navColor};
    color: white;
    }

  section {
    width: 60%;
    max-width: 1200px;
    display: table;
    margin: 0 auto;
}

  article{
    margin: 5%;
    padding: 5%;

    border-radius: 5px;
    background: ${({ theme }) => theme.article};
    box-shadow: 0px 0px 25px 1px ${({ theme }) => theme.shadowBoxColor};
  }

  article.noBoxShadow{
      background: none;
      box-shadow: none;
  }

  @media only screen and (max-width: 600px){

}

  .btn-icon{
  }

.btn-icon:hover {
    transform: scale(1.2);
    border: gold;
  }

  @keyframes glow {
    from {
      box-shadow: 0 0 10px -10px #aef4af;
    }
    to {
      box-shadow: 0 0 10px 10px #aef4af;
    }
  }

  .some-page-wrapper {
    margin: 0 auto;
  }
  
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    height: 100%;
    border: solid;
    border-width 0;
    padding: 1%;
  }

  .column-skills {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    height: 100%;
    border: solid;
    border-width 0;
    padding: 2%;
  }

  .column-skills:hover{
    background-color: ${({ theme }) => theme.skillShadowBoxcolor};  
    transform: scale(1.02);

  }
  
  
  .column-skills:focus {
    background-color: ${({ theme }) => theme.skillShadowBoxcolor};
    transform: scale(1.03);
  
  }
  

  
  @media screen and (min-width: 1000px) {
    .column {
      flex: 1
    }

    .column-skills {
      flex: 1
    }
  
    .double-column {
      flex: 2
    }
  }

  @media only screen and (max-width: 700px) {

    .name{
        font-family: 'Hurricane', cursive;
        font-size: 65px;
        line-height: 30px;  
    }
    .centerNameContent{

      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      background: none;
      box-shadow: none;
  
    }
    

    section {
      width: 100%;
      margin: 0 auto;
  }

    article{
      width: 90%;
      margin: 0 auto;
      padding: none;
      overflow:hidden;
      background: none;
      box-shadow: none;
      font-size: 14px;
    }

    h2{
      font-size:21px;
    }

    h1{
      font-size: 21px;
    }
  
    img,
object {
  display: block;
  border: 0;
  max-width: 100%;
  height: auto;
}

* {
  -moz-box-sizing: border-box;
  -webkit-kit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}


`;

export const light = {
  primary: "#F2FDFF",
  secondary: "#101935",
  article: "F2FDFF",
  shadowBoxColor: "none",
  navColor: "#030E17",
  skillShadowBoxcolor: "rgba(0,0,0,0.1)"


};

export const dark = {
  primary: "#11191f",
  secondary: "#bbc6ce",
  article: "#18232c",
  shadowBoxColor: "rgba(0,0,0,0.4)",
  navColor:"#030E17",
  skillShadowBoxcolor: "rgba(0,0,0,0.4)"
};

export const Navigation = styled.header`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: sticky; top: 0;
  align-items: center;
  height: 50px;
  background: ${({ theme }) => theme.navColor};

  .btn-hidden{
    border: transparent;
    background-color: transparent;
    color: transparent;
  }


  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color:white;

    transition: all 0.9s;
    color: white;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: white;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
      list-style-type: none;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #15cdfc;
    }
    span {
      position: absolute;
      top: 0;
      right: 5px;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }

@media only screen and (min-width: 600p) {
  .btn-hidden{
    border: transparent;
    background-color: transparent;
    color: transparent;
    padding: 10px;
  position: absolute;
  top: 0;
  right: 5px;
  }
}

  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: center;
  position: sticky; top: 0;
  background: ${({ theme }) => theme.navColor};
  color: "white";
`;

export const NavLink = styled(Link)`
  display: flex;
  padding: 0 1rem;
  color: white;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    left: 40px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }&:hover {
    display: block;
  }

  
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: block;
  }&:hover {
    display: block;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
 justify-content: flex-end;
  width: 100vw; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;




