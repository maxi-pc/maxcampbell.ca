import React from 'react';
import aboutPictures from '../../images/aboutPicture.jpg';
import MySocials from '../socialIcons';

const About = () => {
    return (
        <>       
   <section><article><p><h1>About Me</h1></p>
 <div className='some-page-wrapper'>
  <div className='row'>
    <div className='column'>
      <div className='column'>
      <p>I'M A FONTEND DEVELOPER &
ENGINEERING TECHNOLOGIST</p>
<p>Hi! My name is Maximiliano (Max) Peirano Campbell, graduated from Douglas College with a Diploma in Computing Studies & Information Systems. I have Planned, Analysed, Designed, Implemented, Tested and Integrated, Maintained projects while in college, and as personal hobby following the AGILE software development cycle.
</p>
<p>I have a passion for Information Technology and I love to stay on top of new technologies. I am currently teaching myself react.js as I find it extremely useful and great stack to have.
 </p>
 </div>
    </div>
    <div className='column'>
      <div className='column'>
          <img src={aboutPictures} width="100%" alt="Maximiliano Peirano Campbell"></img>
          <MySocials/>
     </div>
    </div>
  </div>
    </div>
 </article>

 <article className="mySkills">
     <h2>My Skills</h2>
 <div className='some-page-wrapper'>
  <div className='row'>
      <div className='column-skills' tabindex="1">
      <h5>WEB DESIGN HTML CSS JS NODE REACT AJAX PHP</h5>
      <p>Demonstrated skills designing, implementing, debugging web pages in HTML, CSS, JS, AJAX, PHP in projects during education in the courses of: Adv Web Pgm - Javascript/AJAX, Web Based Scripting, Multimedia Web Development.</p>
<p>Demonstrated CMS (Content Management System) experience using WordPress and Joomla as well as implementing and debugging plugins or themes.</p>
    </div>
    <div className='column-skills' tabindex="2">
      <h5>VISUAL STUDIO C#</h5>
      <p>Demonstrated skills designing, implementing, debugging C# applications in projects during education in the courses of: Data Structures & Algorithms , Systems Analysis & Design, Intro to Programming I.</p>
<p>Personal experience includes creating additional features to GTA5 private servers through Lua. For personal Unity projects I designed and implemented an item system to a game project I created.</p>
    </div>
  </div>
  <div className='row'>
    <div className='column-skills' tabindex="3">
      <h5>ECLIPSE/INTELLIJ IDEA JAVA</h5>
      <p>Demonstrated skills designing, implementing, debugging Java Applications in projects during education in the course of: Software Engineering.</p>
      </div>
    <div className='column-skills' tabindex="4">
      <h5>ANDROID STUDIO JAVA</h5>
<p>Demonstrated skills designing, implementing, debugging Android Apps in projects during education in the course of: Intro to Mobile Development.</p>
<p>Implementing Github allowed me to share development of this project with group members in this course and successful deploy our Java application.</p>
    </div>
  </div>
  <div className='row'>
      <div className='column-skills' tabindex="5">
      <h5>PHPMYADMIN MYSQL WORKBENCH HEIDISQL RELATIONAL DATABASES</h5> 
      <p>Demonstrated skills designing, implementing, debugging, and managing relational MySQL databases with Phpmyadmin, MySQL Workbench, and HeidiSQL.</p>
      </div>
    <div className='column-skills' tabindex="6">
    <h5>MONGODB NON-RELATIONAL DABATASES</h5>
<p>Demonstrated skills designing, implementing, debugging, and managing non-relational databases with MongoDB.</p>
    </div>
  </div>
</div>
 </article>
 </section>     </>
    )
}

export default About