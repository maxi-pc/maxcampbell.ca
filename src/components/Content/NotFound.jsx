import React from 'react';
import { Link } from 'react-router-dom';
//import { Button}  from 'semantic-ui-react';

const NotFound = () => {
    return (
        <>
  <center className="centerPageContent"> <p><h1>404</h1></p>
          
          <p>Page Not Found</p>
         <p><Link to={'/'}><button className="NotFoundBtn">Go Home</button></Link></p></center>
        </>
    )
}

export default NotFound;