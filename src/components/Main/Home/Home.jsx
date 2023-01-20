import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class Home extends Component {
  render() {
    return <div className="homeContainer">
      <section data-aos="fade-right" data-aos-duration="1500" id="home">
      <img src="" alt="" />
      <div className="container">
        <h1>Hi, my name is</h1>
        <h1>Pablo Moya</h1>
      </div>
      <div className="profileContainer">
        <h3>Fullstack Developer</h3>
        <a className="navLogo" href="https://github.com/pablomoga9" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
        <a className="navLogo" href="https://www.linkedin.com/in/pablo-moya-garc%C3%ADa-526588167/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/linkedin-circled--v1.png" alt="" /></a>
      </div>
      <p></p>
    </section>
      <p data-aos="fade-right" data-aos-duration="3000" className="description">I started studying everything related to video games development in its most technical aspects. To complete my profile, I decided to get into web and software development, which ended up captivating me. I am currently looking to further develop my professional career and bring my hardworking side and all my knowledge to the team.</p>
    </div>
  }
}

export default Home;
