import { Slide } from 'react-awesome-reveal';
import Icons from '../images/skills/index';
import { FcFlashOn } from 'react-icons/fc';

const MySkills = () => {

  var i = -1;
  const listIcons = Icons.map((icon) => (<div key={icon.name} className="imgcon" title={icon.name} tabIndex={i++}><img className="imgico" src={icon.src} title={icon.name} alt={icon.name}></img></div>))

    return (
        <> 
      <div id='hero-toolbox'>
      <Slide triggerOnce direction='right' cascade fraction='1'><center><h2 className='hero-anchor'>My Toolbox</h2></center></Slide>
         <Slide triggerOnce><div className='icon-wrapper'>
       {listIcons}<p><FcFlashOn/>Highly interactive Front end / User Interfaces for your web and mobile applications<br/>
      <FcFlashOn/>Demonstrated ReactJS responsive front end websites<br/>
      <FcFlashOn/>Developing mobile applications using Android Studio<br/></p></div></Slide>

      </div>
      </>
      );
    }
  

  export default MySkills  