import { useState } from "react";
import { useForm } from "react-hook-form";

function FormTwo({ updatePhone, state, updateSending, nextStep }) {


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ shouldUseNativeValidation: true });

  const [phone, setPhone] = useState("");

  const onSubmit = () => {
    updatePhone(phone);
    updateSending(true);
  };

  return (
    <div className="flex-wrap-center form-wrapper step-two">
      <div className="sub-block">
        <h4>Necesitamos validar tu número para continuar.</h4>
        <p>Ingresa tu número a 10 digitos y te enviaremos un código SMS.</p>
      </div>
      <form
        className="flex-wrap-center step-two"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-item">
          <label htmlFor="phone">Número de Celular</label>
          <div className="form-field">
            <input
              className="phone"
              name="phone"
              type="phone"
              {...register("phone", {
                required: true,
                pattern: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
                minLength: 10,
                maxLength: 10,
                onChange: function (e) {
                  setPhone(e.target.value);
                },
              })}
              autoComplete="off"
            />
            {errors.phone?.type === "pattern" && (
              <div className="error">Ingresa un número válido, por favor</div>
            )}
            {errors.phone?.type === "required" && (
              <div className="error">Ingresa tu número de teléfono, por favor</div>
            )}
            {errors.phone?.type === "minLength" && (
              <div className="error">
                El número no puede tener menos de 10 dígitos
              </div>
            )}
            {errors.phone?.type === "maxLength" && (
              <div className="error">
                El número no puede tener mas de 10 dígitos
              </div>
            )}
          </div>
        </div>
        <button className="submit-button" type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
}

export default FormTwo;
