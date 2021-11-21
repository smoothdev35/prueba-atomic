import Lapiz from "../../assets/Group 4026@2x.png";

function FormThree() {
  return (
    <div className="flex-wrap-center form-wrapper step-three">
      <div className="sub-block">
        <h4>Te enviamos un SMS al número:</h4>
        <div className="phone-modification">
          <p className="stored-number">+52 55 18 50 91 96</p>
          <button class="img-wrapper" aria-label="editar el número de teléfono">
            <img width="50" height="50" alt="ilustracion de un lapiz" src={Lapiz} />
          </button>
        </div>
        <p className="code-caption">Ingresa el código de verificación:</p>
      </div>
      <form className="flex-wrap-center step-three">
        <div className="form-item">
          <label for="codigo">Código de verificación</label>
          <div className="form-field">
          <input name="codigo" type="text" required></input>
          </div>
          
        </div>
        <div className="resend-row">
          <p>&#191;No recibiste el código?</p>
          <button
            className="resend"
            aria-label="volver a mandar el código de verificación al número indicado"
          >
            Reenviar código
          </button>
        </div>
          <button className="submit-button" type="submit">
            Validar código
          </button>
      </form>
    </div>
  );
}

export default FormThree;
