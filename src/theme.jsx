import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 100%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
}

body {
  display: flex;
  flex-direction: column;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 400;
  line-height: 1.75;

}

header {
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: sticky; top: 0;
}

main {
display:flex;

}

footer {
background:  ${({ theme }) => theme.navColor};
height: 50px;
display:


}

flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}

.imgcon{
  display: inline-flex;
  margin: 2%;
  
}

.imgico{
  height: 90px;
  //filter: grayscale(20%);
}

.imgcon:focus::after{
  position: absolute;
  width: 90px;
  transform: translate(0%,400%);
 
  content: attr(title);
  background-color: rgba(0,0,0,0.6);
  border-radius: 10px;
  color:white;
  font-size: 80%;
}

.imgico:hover{
  //background-color: ${({ theme }) => theme.skillShadowBoxcolor};  
  transform: scale(1.25);

}


.imgico:focus {
  //background-color: ${({ theme }) => theme.skillShadowBoxcolor};
  transform: scale(1.4);

}

    .btn-hidden{
    border: transparent;
    background-color: transparent;
    color: transparent;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 5px;
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

  section {
    min-height: 90%;
    width: 70%;
    max-width: 1200px;

    margin: 0 auto;
    
}

  article{

    margin: 5%;
    padding: 5%;

    border-radius: 5px;
    background: ${({ theme }) => theme.article};
    box-shadow: 0px 0px 25px 1px ${({ theme }) => theme.shadowBoxColor};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  article.noBoxShadow{
      background: none;
      box-shadow: none;
      
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

    .imgcon{
      display: inline-flex;
      margin: 5%;
      
    }
    
    .imgcon:focus::after{
      position: absolute;
      width: 70px;
      transform: translate(0%,400%);
     
      content: attr(title);
      background-color: rgba(0,0,0,0.6);
      border-radius: 10px;
      color:white;
      font-size: 80%;
    }

    .imgico{
      height: 70px;

      //filter: grayscale(20%);
    }


    h2{
      font-size:21px;
    }

    h1{
      font-size: 21px;
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
// 011627 like it
export const dark = {
  //primary: "#11191f",
  //secondary: "#bbc6ce",
  //article: "#18232c",
  //primary: "#00111c",
  //secondary: "#bbc6ce",
  //article: "#011627",
  primary: "#08090C",
  secondary: "#bbc6ce",
  article: "#101218",
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

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
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
  .fabars {
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
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
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
    .btn-hidden{
      border: transparent;
      background-color: transparent;
      color: transparent;
      padding: 10px;
      position: relative;
    }
    .fabars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;

      display: block;
      margin:0 auto;
      text-align: center;


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



