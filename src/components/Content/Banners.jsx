import React from 'react';
import ContactImage from './../../images/contact.png'

const Banners = () => {
  

    return (
        <>
        <div className='card-container'>
        <center>
          <div className='card-row'>
      <div className='card'>
        <div className='card-title'>About</div>
        <div className='card-content'>Head over to my contact page to find out where you can find me online!</div>
        <div className='card-image'><img src={ContactImage} className='card-image'/></div>
 </div>
      <div className='card'>
        <div className='card-title'>Portfolio</div>
        <div className='card-content'>Head over to my contact page to find out where you can find me online!</div>       
        <div className='card-image'><img src={ContactImage} className='card-image'/></div>
        </div>
      <div className='card'>
        <div className='card-title'>Contact</div>
        <div className='card-content'>Head over to my contact page to find out where you can find me online!</div>
        <div className='card-image'><img src={ContactImage} className='card-image'/></div>
        </div>
</div></center></div>
        </>

    )
}

export default Banners