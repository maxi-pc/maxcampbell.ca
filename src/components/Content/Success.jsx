import React from 'react';
//import NotFoundImage from './../../images/page404.png';
import { Link } from 'react-router-dom';
//import { Button}  from 'semantic-ui-react';

const Success = () => {
    return (
        <>
   <p><h1 className='hidden'>Thank you</h1></p>
          
          <h2>thank you</h2>
        <p>Your message was sent successfully.</p>
         <p><Link to={'/'}><button>Go Home</button></Link>
         <Link to={'/contact'}><button>Go Contact</button></Link></p>
        </>
    )
}

export default Success;