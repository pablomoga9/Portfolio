import React from "react";
import linkedinLogo from '../Works/img/linkedinLogo.png';
import freeCode from '../Works/img/freeCodeCamp.png';
import udemyLogo from '../Works/img/udemyLogo.png';

const Education = () => {
  return <><h2>Education</h2>
    <section id="education">
    <article data-aos="fade-right" data-aos-duration="1500">
      <h3>Fullstack Development Bootcamp</h3>
      <p className="company">The Bridge</p>
      <p>jun. 2022 - nov. 2022</p>
      <ul>
        <li>
          Layout: HTML5, CSS3, Flexbox, SASS, Bootstrap, MUi y diseño responsive.
        </li>
        <li>
          Javascript (ES6).
        </li>
        <li>
          Database with MongoDB, PostgreSQL, SQLite and Firebase.
        </li>
        <li>
          Develop SPA with React.
        </li>
        <li>
          SCRUM methodology.
        </li>
        <li>
          Backend Development with NodeJS and ExpressJS
        </li>
      </ul>
    </article>
    <article data-aos="fade-left" data-aos-duration="1500">
      <h3>Videogame Development Technique</h3>
      <p className="company">Centro Universitario EUSA</p>
      <p>sept. 2020 - may. 2022</p>
    </article>
    </section>
   
    <article className="courses" data-aos="fade-down" data-aos-duration="1500">
       <h3>Courses & certificates</h3>
       <div className="certificate">
       <p><b>JavaScript Algorithms and Data Structures</b></p>
        <div className="courseCompany">
          <p>freeCodeCamp</p>
          <img className="companyLogo" src={freeCode} alt="" />
        </div>
        
        <p>Expedition: oct. 2022</p>
       </div>
       <div className="certificate">
       <p><b>Web Development HTML, CSS, JS, PHP & MySQL</b></p>
        <div className="courseCompany">
          <p>Udemy</p>
          <img className="companyLogo" src={udemyLogo} alt="" />
        </div>
        
        <p>Expedition: sep. 2022</p>
       </div>
       <div className="certificate">
       <p><b>Become an Angular developer</b></p>
        <div className="courseCompany">
          <p>LinkedIn</p>
          <img className="companyLogo" src={linkedinLogo} alt="" />
        </div>
        
        <p>Expedition: dic. 2022</p>
       </div>
       <div className="certificate">
        <p><b>Advanced React</b></p>
        <div className="courseCompany">
          <p>LinkedIn</p>
          <img className="companyLogo" src={linkedinLogo} alt="" />
        </div>
        
        <p>Expedition: dic. 2022</p>
       </div>
    </article>
  </>
};

export default Education;
