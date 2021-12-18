import { Slide } from 'react-awesome-reveal';
import Icons from '../images/skills/index';

const MySkills = () => {

  var i = -1;
  const listIcons = Icons.map((icon) => (<div key={icon.name} className="imgcon" title={icon.name} tabIndex={i++}><img className="imgico" src={icon.src} title={icon.name} alt={icon.name}></img></div>))

    return (
        <> 
      
      <Slide triggerOnce direction='right'><center><h2>My Toolbox</h2></center></Slide>
         <Slide triggerOnce><div className='icon-wrapper'>
       {listIcons}</div></Slide>
      </>
      );
    }
  

  export default MySkills  