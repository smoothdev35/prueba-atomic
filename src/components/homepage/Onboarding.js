import { Link } from "react-router-dom";
import "../../styles/homepage/onboarding.css";
import onboardImg from "../../assets/Group 4040.png";
import arrowTwo from "../../assets/right-arrow-2.svg";

function Onboarding() {
  return (
    <section className="section onboarding">
      <div className="heading-block section-title">
        <h1>
          <span className="upper">&#161;te encantará</span>
          <br />
          <span className="upper atomic">trabajar con nosotros!</span>
        </h1>
      </div>
      <article className="flex-wrap-center onboarding-content">
        <div className="img-wrapper">
          <img
            width="1209"
            height="416"
            alt="ilustracion de un equipo de trabajo con una computadora en medio"
            src={onboardImg}
          />
        </div>
        <div className="flex-between onboarding-steps">
          <div className="step-text">
            Contratación
            <br />
            remota
          </div>
          <span className="img-wrapper step-icon" aria-hidden="true">
            <img width="100" height="100" alt="" src={arrowTwo} />
          </span>
          <div className="step-text">
            Entrevista con
            <br />
            el área de RH
          </div>
          <span className="img-wrapper step-icon" aria-hidden="true">
            <img width="100" height="100" alt="" src={arrowTwo} />
          </span>
          <div className="step-text">
            Prueba
            <br />
            práctica
          </div>
          <span className="img-wrapper step-icon" aria-hidden="true">
            <img width="100" height="100" alt="" src={arrowTwo} />
          </span>
          <div className="step-text">
            Entrevista
            <br />
            técnica
          </div>
        </div>
        <Link
          to="/register"
          className="button-link"
          aria-label="ir a la pagina de registracion"
        >
          &#161;Quiero ser parte!
        </Link>
      </article>
    </section>
  );
}
export default Onboarding;
