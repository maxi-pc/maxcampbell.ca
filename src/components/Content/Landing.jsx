import React from 'react';
import HeroFull from './HeroFull';
import HeroMid from './HeroMid';
import Home from './Home';
import MySkills from '../Icons';

import Banners from './Banners';

const Landing = () => {
  

    return (
        <>
       <section className='noShadowBox'>
       <h1 className="hidden">Home</h1>
       <HeroFull><Home/></HeroFull>
       <HeroFull><MySkills/></HeroFull>
       <HeroFull><Banners/></HeroFull>
       </section>

        </>

    )
}

export default Landing