import "./footer.css";
import Linkedin from "../assets/linkedin@2x.png";
import Twitter from "../assets/twitter@2x.png";
 
import { Link } from "react-router-dom";
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <article className="flex-between footer-content">
        <small>
          &copy; {currentYear} AtomicLabs. Todos los derechos reservados.
        </small>
        <div className="footer-right">
          <a
            href="https://3821752a-5095-4769-9245-30b365470d9b.filesusr.com/ugd/8143b9_d7437e31ef3849d3a12617f074bd9b01.pdf"
            className="privacy-link"
            aria-label="ver el aviso de privacidad"
          >Aviso de privacidad</a>
          <div className="social">
            <div className="block-link linkedin">
              <div className="img-wrapper">
                <img
                  width="60"
                  height="60"
                  alt="ilustracion de un cohete espacial, logo de atomiclabs"
                  src={Linkedin}
                />
              </div>
              <a
                href="https://www.linkedin"
                aria-label="ir a la pagina linkedin de AtomicLabs"
              ></a>
            </div>
            <div className="block-link twitter">
              <div className="img-wrapper">
                <img
                  width="60"
                  height="60"
                  alt="ilustracion de un cohete espacial, logo de atomiclabs"
                  src={Twitter}
                />
              </div>
              <a
                href="https://www.linkedin"
                aria-label="ir a la pagina linkedin de AtomicLabs"
              ></a>
            </div>
          </div>
        </div>
      </article>
    </footer>
  );
}

export default Footer;
