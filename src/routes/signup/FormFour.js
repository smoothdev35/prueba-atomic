import { Link } from "react-router-dom";
function FormFour() {
  return (
    <div className="flex-wrap-center form-wrapper step-four">
      <div className="sub-block">
        <h4>
          Por favor revisa nuestros términos y condiciones para este servicio:
        </h4>
        <Link to="/privacy" target="_blank" className="consent-link">
          Consulta Términos y Condiciones
        </Link>
      </div>
      <form className="flex-wrap-center step-four">
        <div className="form-item">
          <label for="consent">
            <input name="consent" type="checkbox" required />
            <span className="custom-checkbox"></span>
            <span className="label-text">
              Acepto los Términos y Condiciones
            </span>
          </label>
        </div>

        <button className="submit-button" type="submit">
          Enviar
          <span className="lock-icon"></span>
        </button>
      </form>
    </div>
  );
}

export default FormFour;
