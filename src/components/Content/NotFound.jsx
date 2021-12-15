import React from 'react';
//import NotFoundImage from './../../images/page404.png';
import { Link } from 'react-router-dom';
//import { Button}  from 'semantic-ui-react';
import NotFoundImage from './../../images/page404.png';

const NotFound = () => {
    return (
        <>
  <center className="centerPageContent"> <p><h1 className='hidden'>404</h1></p>
          
          <h2>Page Not Found</h2>
        <img src={NotFoundImage} width='50%'/>
         <p><Link to={'/'}><button className="NotFoundBtn">Go Home</button></Link></p></center>
        </>
    )
}

export default NotFound;