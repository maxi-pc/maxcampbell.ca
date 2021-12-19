import React from 'react';
import maxc from './../../images/portfolio/maxc.PNG';
import advancedwindows from './../../images/portfolio/advancedwindows.PNG';
import maxcampbell from './../../images/portfolio/maxcampbell.PNG';
import uniFundMe from './../../images/portfolio/UniFundMe.png';
import uniFundMeApp from './../../images/portfolio/UniFundMeApp.png';
import automobileRepair from './../../images/portfolio/AutomobileRepairShop.png';
import gamesDB from './../../images/portfolio/gamesDB.PNG';
import { Slide,  } from 'react-awesome-reveal';
import { AttentionSeeker } from 'react-awesome-reveal';

const portfolio = [
    {title: "Maxcampbell", image: <img src={maxcampbell} width="100%" height="100%" alt=""/>, text: "Current personal portfolio website created and managed with React. Deployment with netlify and github.  Libraries used: React Icons, React-router-dom, Styled-components, react-awesome-reveal, react-scroll.  Made from scratch with create-react-app as base.  Figma used to start design process with wireframes, then CSS to implement the figma design.", URL: "https://maxcampbell.ca", git: "https://github.com/maxi-pc/maxcampbell.ca"},
    {title: "Maxc", image: <img src={maxc} width="100%" height="100%" alt=""/>, text: "Personal portfolio website created deployed and managed with wordpress, used Cpanel and elementor for creation.  Demonstrated experience with Google Analytics, Google Dev Tools, GoDaddy, Hostinger, Cpanel, SSL Certificates, SEO improvement, PHP, HTML, CSS, JS", URL: "https://maxc.ca", git: "N/A"},
    {title: "Advanced Windows", image: <img src={advancedwindows} width="100%" height="100%" alt=""/>, text: "Client requested a simple website with a home page, and about page.  Created deployed and managed with wordpress and Cpanel.", URL: "https://advancedwindows.ca", git: "N/A"},
    {title: "GamesDB", image: <img src={gamesDB} width="100%" height="100%" alt=""/>, text: "PHP website for displaying games database list, technologies used include PHP, MySQL, HTML, CSS.  Able to Add, Remove, and Edit new games to the database.", URL: "N/A", git: "https://github.com/maxi-pc/gamesDB"},  
    {title: "UniFundMe", image: <img src={uniFundMe} width="100%" height="100%" alt=""/>, text: "Native java application for finding, saving, and printing school grants, schoolarships, etc for students by entering student info and querying data.", URL: "N/A", git: "https://github.com/maxi-pc/UniFundMe"},
    {title: "UniFundMe App", image: <img src={uniFundMeApp} width="100%" height="100%" alt=""/>, text: "Android App version of UniFundMe, same principles, functions and methods as native app transfered to Android Studio.", URL: "N/A", git: "https://github.com/maxi-pc/UniFundMeApp"},
    {title: "Automobile Repair Shop", image: <img src={automobileRepair} width="100%" height="100%"  alt=""/>, text: "C# application for managing automobile repair shops.  Access to management window for printing reports, and employees window for managing repairs by adding, removing, editing entries.  SQLite DB for backend.", URL: "N/A", git: "https://github.com/maxi-pc/AutomobileRepairShop"},
]

const Portfolio = () => {

    var i = -1;
    function isEven(i){
        if(i%2 === 0)
        return true;
        else
        return false;
    }
    const listPortfolio = portfolio.map((project) => (
     <Slide triggerOnce direction={isEven(i) ? 'right' : 'left'}>
<h2>{project.title}</h2>
   <article key={project.title} tabIndex={i++} className='portfolio-item'>
     <div className='portfolio-item-title'></div> 
    <div className='portfolio-item-URL'><p> URL:<br/>{ project.URL === "N/A" ? project.URL :  <AttentionSeeker><a href={project.URL}>{project.URL}</a></AttentionSeeker>}</p></div> 
    <div className='portfolio-item-git'><p> Github:<br/>{project.git === "N/A" ? project.git :  <AttentionSeeker><a href={project.git}>{project.title}</a></AttentionSeeker>}</p></div> 
    <div className='portfolio-item-image'>{project.image}</div>
    <div className='portfolio-item-text'> About:<br/>{project.text}</div>
   
  
    </article></Slide>
    ))
    return (
        <>
    
<section>
<center>

<div className='portfolio-container'>
<div className='portfolio-column'>

{listPortfolio}

</div>
</div>
</center>
</section>


</>
    )
}

export default Portfolio