import { Link } from "react-router-dom";
import "../../styles/homepage/perks.css";
import perksImgOne from "../../assets/Group 4041.png";
import perksImgTwo from "../../assets/Group 4042.png";
import perksImgThree from "../../assets/Group 4043.png";
import checkBadgeImg from "../../assets/ic_check_tiny@2x.png";

function Perks() {
  return (
    <section className="section perks">
      <div className="heading-block section-title">
        <h1>
          <span className="upper">&#191;por qué</span>
          <span className="upper atomic"> atomic?</span>
        </h1>
      </div>
      <article className="flex-wrap-center perks-content">
        <div className="flex-between perks-illustrations">
          <div className="img-wrapper">
            <img
              width="300"
              height="400"
              alt="ilustracion de un cosmonauta usando un dispositivo digital con lapiz con una mano y un raton de computadora en la otra"
              src={perksImgOne}
            />
          </div>
          <div className="img-wrapper">
            <img
              width="300"
              height="400"
              alt="ilustracion de un cosmonauta parado sin su casco sosteniendo una laptop con una mano"
              src={perksImgTwo}
            />
          </div>
          <div className="img-wrapper">
            <img
              width="300"
              height=""
              alt="ilustracion de un cosmonauta parado sobre una mano con las piernas separadas para arriba"
              src={perksImgThree}
            />
          </div>
        </div>
        <article className="flex-wrap-center perks-details">
          <div className="flex-between perks-lists">
            <ul className="perks-list one">
              <li>Usamos las tecnologías más modernas.</li>
              <li>Innovamos y creamos proyectos retadores.</li>
            </ul>
            <ul className="perks-list two">
              <li>&#161;Trabajamos en equipo rumbo al éxito!</li>
              <li>No tenemos código de vestimenta.</li>
            </ul>
            <ul className="perks-list three">
              <li>Realizamos actividades para tu bienestar.</li>
              <li>&#161;Tenemos un parque frente a la oficina!</li>
            </ul>
          </div>
          <article className="perks-table-wrapper">
            <table className="perks-table">
              <thead>
                <tr>
                  <th className="left-align">
                    <h3>CARACTERÍSTICAS</h3>
                  </th>
                  <th>
                    <h3>OTROS</h3>
                  </th>
                  <th className="light-blue">
                    <h3 className="big">ATOMIC</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="content-row">
                  <td className="left-align no-border">
                    Equipo inclusivo, honesto y auténtico
                  </td>
                  <td>
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                  <td className="light-blue">
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                </tr>
                <tr className="content-row">
                  <td className="left-align no-border">
                    Puntualidad es nuestro segundo nombre
                  </td>
                  <td>
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                  <td className="light-blue">
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                </tr>
                <tr className="content-row">
                  <td className="left-align no-border">
                    Siempre innovamos en nuestros productos
                  </td>
                  <td>
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                  <td className="light-blue">

                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                </tr>
                <tr className="content-row">
                  <td className="left-align no-border">
                    Te ayudamos a crecer e implementar nuevos conocimientos
                  </td>
                  <td></td>
                  <td className="light-blue">
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                </tr>
                <tr className="content-row">
                  <td className="left-align no-border">
                    Nos preocupamos por tu bienestar
                  </td>
                  <td></td>
                  <td className="light-blue">
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                </tr>
                <tr className="content-row">
                  <td className="left-align no-border">
                    El respeto es una parte fundamental
                  </td>
                  <td></td>
                  <td className="light-blue">
                    <img
                      width="30"
                      height="30"
                      alt="ilustracion de una paloma para indicar la presencia de la caracteristica a la izquierda de esta fila en esta columna"
                      src={checkBadgeImg}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <Link
            to="/register"
            className="button-link"
            aria-label="ir a la pagina de registracion"
          >
            &#161;Quiero ser parte!
          </Link>
        </article>
      </article>
    </section>
  );
}

export default Perks;
