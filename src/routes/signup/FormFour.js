import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function FormFour({ state, nextStep }) {
  useEffect(() => {
    console.log(state);
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = () => {
    nextStep();
  };

  return (
    <div className="flex-wrap-center form-wrapper step-four">
      <div className="sub-block">
        <h4>
          Por favor revisa nuestros términos y condiciones para este servicio:
        </h4>
        <Link to="/terms" target="_blank" className="consent-link">
          Consulta Términos y Condiciones
        </Link>
      </div>
      <form
        className="flex-wrap-center step-four"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-item">
          <label>
            <input type="checkbox" required />
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
