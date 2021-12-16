import React from 'react';
import HeroFull from './HeroFull';
import HeroMid from './HeroMid';
import Home from './Home';
import MySkills from '../Icons';
import MyWeb from '../IconsWeb';

import Banners from './Banners';


const Landing = () => {
  

    return (
        <>
       <section className='noShadowBox'>
       <h1 className="hidden">Home</h1>
       <HeroFull className="hero-one"><Home/></HeroFull>
       <HeroFull className="hero-two"><MySkills/></HeroFull>
       <HeroFull className="hero-three"><MyWeb/></HeroFull>
       <HeroFull className="hero-four"><Banners/></HeroFull>
       </section>

        </>

    )
}

export default Landing