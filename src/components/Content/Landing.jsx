import React from 'react';
import HeroFull from './HeroFull';
import Home from './Home';
import MySkills from '../Icons';
import MyWeb from '../IconsWeb';

import Banners from './Banners';
import HeroNav from './HeroNav';

const Landing = () => {
  

    return (
        <>
         <HeroNav/>
       <section className='noShadowBox'>
       <h1 className="hidden">Home</h1>
       <div className="hero-one"><HeroFull><Home/></HeroFull></div>
       <div className="hero-two"><HeroFull><MySkills/></HeroFull></div>
       <div className="hero-three"><HeroFull><MyWeb/></HeroFull></div>
       <div className="hero-four"><HeroFull><Banners/></HeroFull></div>
       </section>

        </>

    )
}

export default Landing