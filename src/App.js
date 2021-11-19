import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import mainLogo from "./assets/atomic-logo.webp";
import cosmonaut from "./assets/Group 4032.png";
import cardImg1 from "./assets/Group 4035.png";
import cardImg2 from "./assets/Group 4036.png";
import cardImg3 from "./assets/Group 4037.png";

function App() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <div className="app">
      <header className="section hero">
        <div className="block-link">
          <div className="img-wrapper">
            <img
              width="162"
              height="81"
              alt="ilustracion de un cohete espacial, logo de atomiclabs"
              src={mainLogo}
            />
          </div>
          <a href="/" aria-label="refrescar la pagina"></a>
        </div>
        <article className="hero-content">
          <div className="img-wrapper">
            <img
              width="500"
              height="500"
              alt="ilustracion de un cosmonauta"
              src={cosmonaut}
            />
          </div>
          <div className="heading-block">
            <h1>
              <span className="big-1">Desarrolla</span>
              <span className="big-1">todo</span>
              <span className="big-1 atomic">tu</span>
              <span className="big-2 upper atomic">potencial</span>
              <span className="smaller">dentro</span>
              <span className="smaller">del</span>
              <span className="smaller">equipo</span>
              <span class="full">
                <span className="big-3 upper atomic">atomic</span>
                <span className="big-3 upper">labs</span>
              </span>
            </h1>
            <a
              className="button-link"
              href="#"
              aria-label="ir a la pagina de registracion"
            >
              !Quiero ser parte!
            </a>
          </div>
        </article>
        <div className="see-more">
          <button aria-label="avanzar de una seccion en la pagina"></button>
          <h3>Quiero saber más</h3>
        </div>
      </header>

      <main>
        <section className="section highlights">
          <div className="heading-block">
            <h1>
              <span className="upper big-1">somos el brazo derecho</span>
              <br />
              <span className="upper atomic big-1">de la tecnología</span>
            </h1>
          </div>
          <div className="cards">
            <article className="card explore">
              <div className="img-wrapper">
                <img width="100" height="100" aria-hidden="true" src={cardImg1} />
              </div>
              <div className="separation">
                <div className="custom-break">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>EXPLORA</h3>
              </div>
              <ul className="card-list">
                <li>
                  Innovación y <strong>creación tecnológica</strong>
                </li>
                <li>
                  <strong>UI / UX</strong>
                </li>
                <li>
                  <strong>Innovación</strong>
                </li>
              </ul>
            </article>
            <article className="card imagine above">
              <div className="img-wrapper">
                <img width="300" height="200" alt="" src={cardImg2} />
              </div>
              <div className="separation">
                <div className="custom-break">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>IMAGINA</h3>
              </div>
              <ul className="card-list">
                <li>
                  <strong>Estrategia</strong> Digital
                </li>
                <li>
                  Big Data &amp; <strong>Analysis</strong>
                </li>
                <li>
                  <strong>Consultoría</strong> Tecnológica
                </li>
                <li>
                  <strong>Reducción</strong> de costos TI
                </li>
              </ul>
            </article>
            <article className="card conquer">
              <div className="img-wrapper">
                <img width="" height="" alt="" src={cardImg3} />
              </div>
              <div className="separation">
                <div className="custom-break">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>CONQUISTA</h3>
              </div>
              <ul className="card-list">
                <li>
                  Desarrollo tecnológico<strong>a la medida</strong>
                </li>
                <li>
                  <strong>Ciberseguridad</strong>
                </li>
                <li>
                  <strong>Servicios de la Nube</strong>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
