import React from 'react';
import MySkills from '../Icons';
import maxc from './../../images/portfolio/maxc.PNG';
import advancedwindows from './../../images/portfolio/advancedwindows.PNG';
import { Slide } from 'react-awesome-reveal';

const portfolio = [
    {title: "Maxc", image: <img src={maxc} width="100%" height="100%"/>, text: "Personal portfolio website created deployed and managed with wordpress, used Cpanel and elementor for creation.", URL: "https://maxc.ca", git: "N/A"},
    {title: "Advanced Windows", image: <img src={advancedwindows} width="100%" height="100%"/>, text: "Client requested a simple website with a home page, and about page.  Created deployed and managed with wordpress and Cpanel", URL: "https://advancedwindows.ca", git: "N/A"}
]

const Portfolio = () => {

    var i = -1;
    const listPortfolio = portfolio.map((project) => (<Slide><article key={project.title} tabIndex={i++} className='portfolio-item'>
     <div className='portfolio-item-title'><h2>{project.title}</h2></div> 
     <div className='portfolio-item-URL'><a href={project.URL}>{project.URL}</a></div> 
      <div className='portfolio-item-git'>{project.git}</div> 
    <div className='portfolio-item-image'>{project.image}</div>
    <div className='portfolio-item-text'>{project.text}</div>
   
  
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