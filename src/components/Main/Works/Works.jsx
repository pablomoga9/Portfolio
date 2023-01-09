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
            <div className="image__title">NasaApp (mobile version)</div>
            <p className="image__description">
              React ,Node ,Express ,MongoDB , JWT Auth , SASS , AOS , Atlas , Leaflet , Git
            </p>
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/NASA_Final" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="notReady" href=""><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={kmon} alt="" />
          <div className="image__overlay">
            <div className="image__title">K'm0n (mobile version)</div>
            <p className="image__description">
            React ,Node ,Express ,MongoDB , JWT Auth , SASS , AOS , Swiper,  Atlas , Leaflet , Git
            </p>
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/AlimentacionFullstack" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://alimentacion.vercel.app/"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={poke} alt="" />
          <div className="image__overlay">
            <div className="image__title">PokeApp (mobile version)</div>
            <p className="image__description">
              React, SASS, AOS
            </p>
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/pokeApp" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://poke-q3usybkw8-pablomoga9.vercel.app/"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={news} alt="" />
          <div className="image__overlay">
            <div className="image__title">NewsApp</div>
            <p className="image__description">
              React, SASS
            </p>
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/NewsApp" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://news-app-theta-seven.vercel.app/"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={job} alt="" />
          <div className="image__overlay">
            <div className="image__title">JobScanner</div>
            <p className="image__description">
              Node, Express, MongoDB, SQL, Pug, JWT Auth, NodeMailer, Puppeteer (Scraping), Git
            </p>
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/JobOffer" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://jobscanner.herokuapp.com/"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div className="image">
          <img className="image__img" src={biblio} alt="" />
          <div className="image__overlay">
            <div className="image__title">BiblioFront</div>
            <p className="image__description">
              HTML, CSS, Javascript, Firebase Auth, Firebase Storage, Firestore database
            </p>
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/BiblioFront" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://biblio-front-kappa.vercel.app/"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
    </ul>
  </section>
};

export default Works;
