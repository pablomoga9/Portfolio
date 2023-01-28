import React from "react";
import biblio from './img/biblioApp.PNG';
import job from './img/jobApp.png';
import kmon from './img/Kmon.PNG';
import nasa from './img/nasaApp.PNG';
import news from './img/newsApp.PNG';
import poke from './img/pokeApp.PNG';
import chat from './img/chatSelected.PNG';
import podcast from './img/zaraHomeFilter.PNG';
import portfolio from './img/portfolioImg.PNG';
import three from './img/threeMc.PNG';
import foundit from './img/foundit.PNG';
import cryptoBot from './img/cryptoBot.PNG';
import laravelCRUD from './img/laravelCRUD.PNG';
import recetasCarousel from './img/recetasCarousel.gif';
import mcGif from './img/mcGif.gif';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Works = () => {

  return <section id="works">
    <h2>Projects</h2>
    <ul className="projects">
      <li data-aos="fade-right" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={nasa} alt="" />
            <div className="image__overlay">
              <div className="image__title">NasaApp (mobile version)</div>
              <p className="image__description">
                React ,Node ,Express ,MongoDB , JWT Auth , SASS , AOS , Atlas , Leaflet , Git
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="data:image/png;base64,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" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
            <img src="https://www.exactpredictions.in/app-assets/images/map/leaflet/customIcons/map-marker-blue.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/NASA_Final" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="notReady" href=""><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={kmon} alt="" />
            <div className="image__overlay">
              <div className="image__title">K'm0n (mobile version)</div>
              <p className="image__description">
                React ,Node ,Express ,PostgreSQL , JWT Auth , SASS , AOS , Swiper, Leaflet , Git
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" />
            <img src="data:image/png;base64,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" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
            <img src="https://www.exactpredictions.in/app-assets/images/map/leaflet/customIcons/map-marker-blue.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/AlimentacionFullstack" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://alimentacion.vercel.app/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>

      <li data-aos="fade-right" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={chat} alt="" />
            <div className="image__overlay">
              <div className="image__title">SocketChat</div>
              <p className="image__description">
                React, Socket.io, MongoDB, Node, Express, Styled Components
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://miro.medium.com/max/480/1*Iohnw2aOQ5EBghVoqKA7VA.png" alt="" />
            <img src="data:image/png;base64,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" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/socket-chat" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="notReady" href=""><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-right" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={recetasCarousel} alt="" />
            <div className="image__overlay">
              <div className="image__title">RecipeApp</div>
              <p className="image__description">
                React, Laravel, PHP, MySQL, Styled Components
              </p>
            </div>
          </div>
          <div className="technologies">
          <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="" />
            <img src="https://miro.medium.com/max/480/1*Iohnw2aOQ5EBghVoqKA7VA.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/salusplay-test" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="notReady" href=""><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      
      <li data-aos="fade-right" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={news} alt="" />
            <div className="image__overlay">
              <div className="image__title">NewsApp</div>
              <p className="image__description">
                React, SASS
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/NewsApp" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://news-app-theta-seven.vercel.app/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={job} alt="" />
            <div className="image__overlay">
              <div className="image__title">JobScanner</div>
              <p className="image__description">
                Node, Express, MongoDB, SQL, Pug, JWT Auth, NodeMailer, Puppeteer (Scraping), Git
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" />
            <img src="data:image/png;base64,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" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="" />
            <img src="data:image/png;base64,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" alt="" />
            <img className="stretch" src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/JobOffer" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://jobscanner.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={biblio} alt="" />
            <div className="image__overlay">
              <div className="image__title">BiblioFront</div>
              <p className="image__description">
                HTML, CSS, Javascript, Firebase Auth, Firebase Storage, Firestore database
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" alt="" />
            <img src="data:image/png;base64,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" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/BiblioFront" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://biblio-front-kappa.vercel.app/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-right" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={mcGif} alt="" />
            <div className="image__overlay">
              <div className="image__title">Minecraft Clone</div>
              <p className="image__description">
                React, Three.js, Cannon
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://user-images.githubusercontent.com/234804/38454097-6d04038a-3a9b-11e8-981a-9ae97ea9246a.png" alt="three.js" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/three.js-MC" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://three-js-mc.vercel.app/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={podcast} alt="" />
            <div className="image__overlay">
              <div className="image__title">Podcaster</div>
              <p className="image__description">
                React, SASS
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/zara-test" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://podcaster-two.vercel.app/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={poke} alt="" />
            <div className="image__overlay">
              <div className="image__title">PokeApp (mobile version)</div>
              <p className="image__description">
                React, SASS, AOS
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/pokeApp" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://poke-q3usybkw8-pablomoga9.vercel.app/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={portfolio} alt="" />
            <div className="image__overlay">
              <div className="image__title">Portfolio</div>
              <p className="image__description">
                React, SASS
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/Portfolio/tree/master" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a href="https://portfolio-zeta-olive-73.vercel.app/" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>

      </li>

    </ul>
    <h3>In progress</h3>
    <ul className="projects">
      <li data-aos="fade-right" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={cryptoBot} alt="" />
            <div className="image__overlay">
              <div className="image__title">CryptoBot</div>
              <p className="image__description">
                Node, BinanceAPI
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="React" />
            <img src="https://user-images.githubusercontent.com/12424618/54043975-b6cdb800-4182-11e9-83bd-0cd2eb757c6e.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/CryptoBot" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="notReady" href="" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
      <li data-aos="fade-up" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={foundit} alt="" />
            <div className="image__overlay">
              <div className="image__title">FoundIt</div>
              <p className="image__description">
                React, MySQL, Express, JWT, SASS, Leaflet
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="" />
            <img src="data:image/png;base64,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" alt="" />
            <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="" />
            <img src="https://www.exactpredictions.in/app-assets/images/map/leaflet/customIcons/map-marker-blue.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/FoundIt/tree/develop" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="notReady" href="" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
      <li data-aos="fade-left" data-aos-duration="1500">
        <div>
          <div className="image">
            <img className="image__img" src={laravelCRUD} alt="" />
            <div className="image__overlay">
              <div className="image__title">ClientsDashboard</div>
              <p className="image__description">
                PHP, Laravel, React, Bootstrap
              </p>
            </div>
          </div>
          <div className="technologies">
            <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="" />
            <img src="https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <a href="https://github.com/pablomoga9/usersLaravelCRUD" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="notReady" href="" target="_blank"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-rocket-advertisement-tanah-basah-glyph-tanah-basah.png" alt="" /></a>
        </div>
      </li>
    </ul>
  </section>
};

export default Works;
