import React from 'react';
import HeroFull from './HeroFull';
import HeroMid from './HeroMid';
import Home from './Home';
import MySkills from '../Icons';

import Banners from './Banners';

const Landing = () => {
  

    return (
        <>
       <section>
       <h1 className="hidden">Home</h1>
       <HeroFull><Home/></HeroFull>
       <HeroMid><MySkills/></HeroMid>
       </section>

        </>

    )
}

export default Landing