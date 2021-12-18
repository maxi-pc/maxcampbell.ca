import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body, #root {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 100%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
}

#root {
  display: flex;
  flex-direction: column;
 }

body {
  display: flex;
  flex-direction: column;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 400;
  line-height: 1.75;
}

.portfolio-container{
//outline-style: solid;
//outline-color: red;

}
.portfolio-column{
width: 100%;
//outline-style: solid;
//outline-color: yellow;
}

.portfolio-item{
  max-width: 100%;
  
  //outline-style: solid;
//outline-color: blue;
display: grid;
grid-template-columns: 40% repeat(2, 30%);
grid-template-rows: 20% 80%;
grid-column-gap: 0px;
grid-row-gap: 0px; 



}:visited{
  color: ${({ theme }) => theme.secondary};
}

.portfolio-item-title{ 
  
} 

.portfolio-item-URL{
  color: ${({ theme }) => theme.secondary};
  grid-area: 1 / 2 / 2 / 3;  

}:visited{
  //color: ${({ theme }) => theme.secondary};
}:hover{
  //color: blue;

}

.portfolio-item-URL a:hover{
  color: #15cdfc; 
}

.portfolio-item-git a:hover{
  color: #15cdfc; 
}


.portfolio-item-git{
  grid-area: 1 / 3 / 2 / 4;

}

.portfolio-item-image{
  grid-area: 1 / 1 / 3 / 2;
  //height: 80%;

}

.portfolio-item-text{
  grid-area: 2 / 2 / 3 / 4; 

}

.form-input{
  font-family: 'Readex Pro', sans-serif;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border-style: none;
  //filter: invert(90%);
}

form{
  display: flex;
  flex-direction: column;
 // width: 500px;
 min-width: 500px;
  font-family: 'Readex Pro', sans-serif;
}

input{
  width: 100%;
  //background: ${({ theme }) => theme.article};
 // color: ${({ theme }) => theme.secondary};
 // font-family: 'Readex Pro', sans-serif;
}

.contact-btn{
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.third};
  border-style: none;
  font-family: 'Readex Pro', sans-serif;
  color: white;
}:focus{

}

textarea{
  width: 100%;
  max-width: 100%;
 // background: ${({ theme }) => theme.article};
//  color: ${({ theme }) => theme.secondary};
 // font-family: 'Readex Pro', sans-serif;
}

.icon-wrapper{
  display: flex; 
  flex-wrap: wrap; 
  flex-direction: row;
justify-content: center;
}

.social-icons{
  color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
}

.social-icons:hover{
  
  color: #15cdfc;
  //transition: 0.50s;
//outline-style: dashed;
//outline-color: ${({ theme }) => theme.secondary};
//outline-width: 3px;
}

/* header{
  width: 100%;
  display: flex;
}

.nav-me{
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.navColor};
  color: white;
  position: fixed;
  display: flex;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
  
  .ul-me {
    display: flex;
    list-style-type: none;
  }
  .li-me {
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
} */

.social-container{
  //width: 30%;

  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  text-align: center;
  }

.column-wrapper{
  display: flex;
  flex: 0 1 24%;

}
.card-container{
width: 100%;
display: flex;
flex-wrap: wrap; 
justify-content: space-between;
}



.card-row{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 

}



 a .card {
  border-radius: 10px;
border-style: solid;
border-color:  ${({ theme }) => theme.secondary};
text-decoration: none!important;
  width: 270px;
  height: 550px;

  background-color: #${({ theme }) => theme.article};
color: ${({ theme }) => theme.secondary};

}

a: link{
  text-decoration: none!important; 
}

a: visited{
 // color: white;
}

.card a:link{
 // color: gold;
 // text-decoration: none!important;
}

.card: a:visited{
 // text-decoration: none!important;
  //color: gold;
}

.card a:active{
  //text-decoration: none!important;
  //color: gold;
}

.card a:hover{
 // text-decoration: none!important;
 // color: gold;
}

.card-content{
  text-align: center;
}

.card-image{
width: 100%;
}

.card-image:hover{
transform: scale(1.1);
}


.heroFull{
  display:flex;
  flex-direction: column;
  min-height: 70vh;
  height: 100%;

  -webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-content: center;
-ms-flex-line-pack: center;
align-content: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
background: none;
box-shadow: none;
}

.heroMid{

  //max-height: 50vh;
  outline-style: solid;
  outline-color: blue;

}

.hidden{
  display:none;
}

main {
margin-top: 50px;
flex: auto;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-content: center;
-ms-flex-line-pack: center;
align-content: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
}

footer {
background:  ${({ theme }) => theme.navColor};
color: white;
min-height: 50px;
height: 50px;
display: flex;
width: 100%;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-content: center;
-ms-flex-line-pack: center;
align-content: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center; 

}

.imgcon{
  //display: flex;
  margin: 2%;  

  justify-content: space-beween;
}

.imgico{
  height: 90px;
 // filter: invert(90%);
}

.imgcon:focus::after{
  position: absolute;
  width: 90px;
  transform: translate(-96%,-120%);

 
  content: attr(title);
  background-color: ${({ theme }) => theme.primary};
  border-style: solid;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.secondary};
  color:${({ theme }) => theme.secondary};
  font-size: 90%;
  text-align: center;
}

.imgico:hover{
  //background-color: ${({ theme }) => theme.skillShadowBoxcolor};  
 // transform: scale(1.25);

}


.imgico:focus {
  //background-color: ${({ theme }) => theme.skillShadowBoxcolor};
  //transform: scale(1.4);

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

    max-width: 1200px;
}

  article{
  
margin: 5%;
   padding: 5%;

    border-radius: 5px;
    background: ${({ theme }) => theme.article};
    box-shadow: 0px 0px 25px 1px ${({ theme }) => theme.shadowBoxColor};

    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;

    
  }

  article.hero{
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
  }

 article .noBoxShadow{
      background: white;
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

  @media only screen and (max-width: 800px) {
    
    .heroFull{
      min-height: 100vh;
      height: 100%;
    }

    .card-row{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap; 
    }

    .portfolio-item{
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 10% repeat(2, 40%) repeat(2, 5%);
      grid-column-gap: 0px;
      grid-row-gap: 0px; 
    
      -webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-content: center;
-ms-flex-line-pack: center;
align-content: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center; 
    }

    .portfolio-item{
      border-style: solid;
    }
    
    .portfolio-item-URL{
      grid-area: 4 / 1 / 5 / 2;
    }
    
    .portfolio-item-git{
      grid-area: 5 / 1 / 6 / 2; 
    }
    
    .portfolio-item-image{
      grid-area: 2 / 1 / 3 / 2; 
    }
    
    .portfolio-item-text{
      grid-area: 3 / 1 / 4 / 2;
    }

    .nav-me{
      background: steelblue;
      flex-direction: column;
      height: auto%;
    }

    .li-me{
      height: 50px;
      width: 100%;
      min-height: 50px;
      background: steelblue;
    }


    .ul-me {
      height: 100%;
      flex-direction: column;
      background: steelblue;
    }


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
      //display: grid-auto;
      margin: 3%;
      
    }
    
    .imgcon:focus::after{
      position: absolute;
      width: 59px;
      transform: translate(-96%,-100%);
      content: attr(title);
      background-color: rgba(0,0,0,0.6);
      border-radius: 10px;
      color:white;
      font-size: 80%;
    }

    .imgico{
      height: 59px;   
     //filter: invert(0.99);
    }


    h2{
      font-size:19px;
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
  third: "#15cdfc",
  article: "#F2FDFF",
  shadowBoxColor: "none",
  navColor: "#030E17",
  skillShadowBoxcolor: "rgba(0,0,0,0.1)",
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
  third: "#15cdfc",
  article: "#101218",
  shadowBoxColor: "rgba(0,0,0,0.4)",
  navColor: "#030E17",
  skillShadowBoxcolor: "rgba(0,0,0,0.4)",
};

export const Navigation = styled.header`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: fixed;
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
    color: white;

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
    .btn-hidden {
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

      display: none;
      margin: 0 auto;
      text-align: center;

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
        display: block;
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
