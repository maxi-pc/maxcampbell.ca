import Icons from '../images/skills/index';

const MySkills = () => {

  var i = -1;
  const listIcons = Icons.map((icon) => (<div key={icon.name} className="imgcon" title={icon.name} tabIndex={i++}><img className="imgico" src={icon.src} title={icon.name} alt={icon.name}></img></div>))

    return (
        <> 
        <h2>My Technologies</h2>
        <center>
        {listIcons}
       </center>
      </>
      );
    }
  

  export default MySkills  