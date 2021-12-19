import React from 'react';
//import NotFoundImage from './../../images/page404.png';
import { Link } from 'react-router-dom';
//import { Button}  from 'semantic-ui-react';
import NotFoundImage from './../../images/page404.png';

const Success = () => {
    return (
        <>
  <center className="centerPageContent"> <p><h1 className='hidden'>404</h1></p>
          
          <h2>thank you</h2>
        <p>Your message was sent successfully.</p>
         <p><Link to={'/'}><button className="NotFoundBtn">Go Home</button></Link>
         <Link to={'/contact'}><button className="NotFoundBtn">Go Contact</button></Link></p></center>
        </>
    )
}

export default Success;