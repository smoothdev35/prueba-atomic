import "./terms.css";
import Mark from "../assets/Group 4029@2x.png";
function Terms() {
  return (
    <main>
      <section className="section terms">
        <article className="flex-wrap-center notice">
          <div className="img-wrapper" aria-hidden="true">
            <img width="50" height="50" alt="" src={Mark} />
          </div>
          <h4>Términos y Condiciones</h4>
          <div className="notice-copy">
            <p>
              Para llevar a cabo las finalidades descritas en el presente Aviso
              de Privacidad, utilizaremos datos personales de identificación,
              contacto y laborales.
            </p>
            <br/>
            <p>
              Los datos personales que AtomicLabs reciba de usted, serán
              utilizados para las siguientes finalidades que son necesarias para
              ofrecer nuestros servicios:
            </p>
            <br/>
            <p>
              AtomicLabs requiere utilizar sus datos personales para incluirlo
              en la base de datos que utilizamos para prestar los servicios de
              reclutamiento, selección de personal, administración de nómina y
              prestación de servicios. AtomicLabs utilizara sus datos personales
              para evaluar si es posible colocarlo en las vacantes de empleo de
              la compañia o de los clientes de AtomicLabs y para conocer sus
              aptitudes, antecedentes y referencias laborales. En este sentido,
              AtomicLabs utilizará sus datos personales para ponerse en contacto
              con usted en relación a las vacantes para las cuales podría ser
              candidato.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Terms;
