import React from 'react';
import { Slide } from 'react-awesome-reveal';
import ContactImage from './../../images/contact.png';
import PortfolioImage from './../../images/portfolio.png';
import SkillsImage from './../../images/skills.png';

const Banners = () => {
  

    return (
        <>
<center>
        <div className='card-container'>
        
          <div className='card-row'>
          <Slide><div className='card' tabIndex='0'>
        <div className='card-title'><h2>My Skills</h2></div>
        <div className='card-content'><p>See what stacks I am familiar with, I am always learning new skills!</p></div>
        <div className='card-image'><img src={SkillsImage} className='card-image'/></div>
 </div></Slide>
 <Slide><div className='card' tabIndex='1'>
        <div className='card-title'><h2>My Portfolio</h2></div>
        <div className='card-content'><p>Look at a list of projects I have designed and developed.</p></div>       
        <div className='card-image'><img src={PortfolioImage} className='card-image'/></div>
        </div></Slide>
        <Slide><div className='card' tabIndex='2'>
        <div className='card-title'><h2>Contact Me</h2></div>
        <div className='card-content'><p>Need to get in touch? Please check my contact page here.</p></div>
        <div className='card-image'><img src={ContactImage} className='card-image'/></div>
        </div></Slide>
</div></div></center>
        </>

    )
}

export default Banners