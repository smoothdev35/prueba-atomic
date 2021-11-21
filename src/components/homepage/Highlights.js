import "../../styles/homepage/highlights.css";
import cardImg1 from "../../assets/Group 4035.png";
import cardImg2 from "../../assets/Group 4036.png";
import cardImg3 from "../../assets/Group 4037.png";

function Highlights() {
  return (
    <section className="section highlights">
      <div className="heading-block section-title">
        <h1>
          <span className="upper">somos el brazo derecho</span>
          <br />
          <span className="upper atomic">de la tecnología</span>
        </h1>
      </div>
      <div className="cards">
        <article className="flex-wrap-center card explore">
          <div className="img-wrapper" aria-hidden="true">
            <img width="300" height="200" alt="" src={cardImg1} />
          </div>
          <div className="flex-wrap-center separation">
            <div className="flex-between custom-break">
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
        <article className="flex-wrap-center card imagine above">
          <div className="img-wrapper" aria-hidden="true">
            <img width="300" height="200" alt="" src={cardImg2} />
          </div>
          <div className="flex-wrap-center separation">
            <div className="flex-between custom-break">
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
        <article className="flex-wrap-center card conquer">
          <div className="img-wrapper" aria-hidden="true">
            <img width="300" height="200" alt="" src={cardImg3} />
          </div>
          <div className="flex-wrap-center separation">
            <div className="flex-between custom-break">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>CONQUISTA</h3>
          </div>
          <ul className="card-list">
            <li>
              Desarrollo tecnológico
              <strong>
                {" "}
                <br />a la medida{" "}
              </strong>
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
  );
}

export default Highlights;
