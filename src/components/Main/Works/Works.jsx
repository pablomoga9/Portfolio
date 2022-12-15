import React from "react";
import biblio from './img/biblioApp.PNG';
import job from './img/jobApp.png';
import kmon from './img/Kmon.PNG';
import nasa from './img/nasaApp.PNG';
import news from './img/newsApp.PNG';
import poke from './img/pokeApp.PNG';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Works = () => {

  return <section id="works">
    <h2>Projects</h2>
    <ul className="projects">
      <li data-aos="fade-right" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={nasa} alt="" />
          <div className="image__overlay">
            <div className="image__title">NasaApp</div>
            <p className="image__description">
              React ,Node ,Express ,MongoDB , JWT Auth , SASS , AOS , Atlas , Leaflet , Git
            </p>
          </div>
        </div>
        <a href="https://github.com/pablomoga9/NASA_Final" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
        <a href=""></a>
      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={kmon} alt="" />
          <div className="image__overlay">
            <div className="image__title">Alimentacion</div>
            <p className="image__description">
              Aqui esta la descripcion
            </p>
          </div>
        </div>
      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={poke} alt="" />
          <div className="image__overlay">
            <div className="image__title">PokeApp</div>
            <p className="image__description">
              Aqui esta la descripcion
            </p>
          </div>
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={news} alt="" />
          <div className="image__overlay">
            <div className="image__title">NewsApp</div>
            <p className="image__description">
              Aqui esta la descripcion
            </p>
          </div>
        </div>
      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={job} alt="" />
          <div className="image__overlay">
            <div className="image__title">JobScanner</div>
            <p className="image__description">
              Aqui esta la descripcion
            </p>
          </div>
        </div>
      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={biblio} alt="" />
          <div className="image__overlay">
            <div className="image__title">BiblioFront</div>
            <p className="image__description">
              Aqui esta la descripcion
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>;
};

export default Works;
