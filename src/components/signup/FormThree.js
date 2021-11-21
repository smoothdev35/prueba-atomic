import { useForm } from "react-hook-form";
import Lapiz from "../../assets/Group 4026@2x.png";

function FormThree({
  backHandler,
  state,
  updateNumber,
  updateSending,
  updateSent,
  updateResend,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = () => {
    updateSent(true);
  };

  const backClickHandler = () => {
    updateNumber(true);
    backHandler();
  };

  const resendHandler = () => {
    backHandler();
    updateResend(true);
    updateSending(true);
  };

  return (
    <div className="flex-wrap-center form-wrapper step-three">
      <div className="sub-block">
        <h4>Te enviamos un SMS al número:</h4>
        <div className="phone-modification">
          <p className="stored-number">{state.phone}</p>
          <button
            className="img-wrapper"
            aria-label="editar el número de teléfono"
            onClick={backClickHandler}
          >
            <img
              width="50"
              height="50"
              alt="ilustracion de un lapiz"
              src={Lapiz}
            />
          </button>
        </div>
        <p className="code-caption">Ingresa el código de verificación:</p>
      </div>
      <form
        className="flex-wrap-center step-three"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-item">
          <label htmlFor="código">Código de verificación</label>
          <div className="form-field">
            <input
              name="código"
              type="text"
              {...register("código", {
                required: true,
                pattern: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
                minLength: 6,
                maxLength: 6,
                validate: (value) => value === "337801",
              })}
            />
            {errors.código?.type === "required" && (
              <div className="error">
                Ingresa el código de seguridad recibido por teléfono
              </div>
            )}
            {errors.código?.type === "pattern" && (
              <div className="error">Ingresa un código válido, por favor</div>
            )}
          </div>
        </div>
        <div className="resend-row">
          <p>&#191;No recibiste el código?</p>
          <button
            className="resend"
            aria-label="volver a mandar el código de verificación al número indicado"
            onClick={resendHandler}
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
