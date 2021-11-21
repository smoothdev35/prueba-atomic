import Lock from "../../assets/ic_lock_24px@2x.png";

function FormOne() {
  return (
    <div className="flex-wrap-center form-wrapper step-one">
      <div className="sub-block">
        <h4>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </h4>
      </div>
      <form className="flex-wrap-center step-one">
        <div className="flex-wrap-center form-item">
          <label for="fname">Nombre(s)</label>
          <div className="form-field">
            <input name="fname" type="text" required></input>
            <span className="img-wrapper" aria-hidden="true">
              <img width="30" height="30" alt="" src={Lock} />
            </span>
          </div>
        </div>
        <div className="fllex-wrap center form-item">
          <label for="lname">Apellidos</label>
          <div className="form-field">
            <input name="lname" type="text" required></input>
            <span className="img-wrapper lock-icon" aria-hidden="true">
              <img width="30" height="30" alt="" src={Lock} />
            </span>
          </div>
        </div>

        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormOne;
