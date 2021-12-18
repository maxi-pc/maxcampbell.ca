import { Slide } from 'react-awesome-reveal';
import IconsWeb from '../images/skills/indexWeb';

const MyWeb = () => {

  var i = -1;
  const listIcons = IconsWeb.map((icon) => (<div key={icon.name} className="imgcon" title={icon.name} tabIndex={i++}><img className="imgico" src={icon.src} title={icon.name} alt={icon.name}></img></div>))

    return (
        <> 
      
      <Slide triggerOnce><center><h2>My Cloud & Web Technologies</h2></center></Slide>
         <Slide triggerOnce direction='right'><div className='icon-wrapper'>
       {listIcons}</div></Slide>
      </>
      );
    }
  

  export default MyWeb