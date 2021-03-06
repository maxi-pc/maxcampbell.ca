import React from 'react';
import { Slide } from 'react-awesome-reveal';
import ContactImage from './../../images/contact.png';
import PortfolioImage from './../../images/portfolio.png';
import SkillsImage from './../../images/skills.png';

const Banners = () => {
  

    return (
     <center>  
        <Slide triggerOnce cascade><div className='card-container'>
 
      <div className='card-row'>
          <Slide triggerOnce><a href='/about'><div className='card' tabIndex='0'>
        <div className='card-title'><h2 id='hero-banner'>My Skills</h2></div>
        <div className='card-content'><p>See what stacks I am familiar with, I am always learning new skills!</p></div>
        <div className='card-image'><img src={SkillsImage} className='card-image' alt='My Skills'/></div>
 </div></a></Slide>
 <Slide triggerOnce><a href='/portfolio'><div className='card' tabIndex='1'>
        <div className='card-title'><h2>My Portfolio</h2></div>
        <div className='card-content'><p>Look at a list of projects I have designed and developed.</p></div>       
        <div className='card-image'><img src={PortfolioImage} className='card-image' alt='My Portfolio'/></div>
        </div></a></Slide>
        <Slide triggerOnce><a href='/contact'><div className='card' tabIndex='2'>
        <div className='card-title'><h2>Contact Me</h2></div>
        <div className='card-content'><p>Need to get in touch? Please check my contact page here.</p></div>
        <div className='card-image'><img src={ContactImage} className='card-image' alt='Contact Me'/></div>
        </div></a></Slide>
</div></div></Slide> </center>


    )
}

export default Banners