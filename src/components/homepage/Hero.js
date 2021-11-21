import { Link } from "react-router-dom";
import "../../styles/homepage/hero.css";
import mainLogo from "../../assets/atomic-logo.webp";
import cosmonaut from "../../assets/Group 4032.png";

function Hero() {

  const goDown=()=>{
    window.scrollTo({
      top:850,
      behavior:"smooth"
    })
  }

  return (
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
        <Link to="/" aria-label="refrescar la pagina"></Link>
      </div>
      <article className="flex-between hero-content">
        <div className="img-wrapper">
          <img
            width="500"
            height="500"
            alt="ilustracion de un cosmonauta"
            src={cosmonaut}
          />
        </div>
        <div className="flex-wrap-center heading-block">
          <h1>
            <span className="big-1">Desarrolla</span>
            <span className="big-1">todo</span>
            <span className="big-1 atomic">tu</span>
            <span className="big-2 upper atomic">potencial</span>
            <span className="smaller">dentro</span>
            <span className="smaller">del</span>
            <span className="smaller">equipo</span>
            <span className="full">
              <span className="big-3 upper atomic">atomic</span>
              <span className="big-3 upper">labs</span>
            </span>
          </h1>
          <Link
            to="/register"
            className="button-link"
            aria-label="ir a la pagina de registracion"
          >
            &#161;Quiero ser parte!
          </Link>
        </div>
      </article>
      <div className="flex-wrap-center see-more">
        <button aria-label="avanzar de una seccion en la pagina" onClick={goDown}></button>
        <h4>Quiero saber más</h4>
      </div>
    </header>
  );
}

export default Hero;
