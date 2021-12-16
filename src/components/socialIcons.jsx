import { AttentionSeeker } from 'react-awesome-reveal'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaDev } from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'

const Icons = [
  { name: "Github", icon: BsGithub , URL: "https://github.com/maxi-pc" },
  { name: "Linkedin", icon: BsLinkedin , URL: "https://www.linkedin.com/in/maxpc/" },
  { name: "Dev", icon: FaDev , URL: "https://dev.to/maxipc" },
  { name: "Email", icon: MdOutlineEmail , URL: "mailto: max.campbell.p@gmail.com" },
]


const MySocials = () => {

  var i = -1;
  const listIcons = Icons.map((icons) => (<div key={icons.name} className="imgcon" title={icons.name} tabIndex={i++}><a href={icons.URL} target="_blank">{<icons.icon size="28" className="social-icons"/>}</a></div>))

    return (
        <> <h2></h2>
      <div className='social-container'> <AttentionSeeker>
        {listIcons}</AttentionSeeker>
        </div>
      </>
      );
    }
  
  export default MySocials  