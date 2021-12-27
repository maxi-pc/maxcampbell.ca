import { Slide } from 'react-awesome-reveal';
import IconsWeb from '../images/skills/indexWeb';
import { FcFlashOn } from 'react-icons/fc';

const MyWeb = () => {

  var i = -1;
  const listIcons = IconsWeb.map((icon) => (<div key={icon.name} className="imgcon" title={icon.name} tabIndex={i++}><img className="imgico" src={icon.src} title={icon.name} alt={icon.name}></img></div>))

    return (
        <> 
      
      <Slide triggerOnce cascade fraction='1'><center><h2 id='hero-web' className='hero-anchor'>My Cloud & Web Technologies</h2></center></Slide>
         <Slide triggerOnce direction='right'><div className='icon-wrapper'>
       {listIcons}<p><FcFlashOn/>Experience working on multiple cloud deployment platforms<br/>
       <FcFlashOn/>Demonstrated experience hosting and managing websites<br/>
       </p></div>
       </Slide>
      </>
      );
    }
  

  export default MyWeb