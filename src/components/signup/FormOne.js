import { useState } from "react";
import { useForm } from "react-hook-form";
import Lock from "../../assets/ic_lock_24px@2x.png";

function FormOne({ updateNames, nextStep }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ shouldUseNativeValidation: true });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    updateNames(firstName, lastName);
    nextStep();
  };

  return (
    <div className="flex-wrap-center form-wrapper step-one">
      <div className="sub-block">
        <h4>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </h4>
      </div>
      <form
        className="flex-wrap-center step-one"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-wrap-center form-item">
          <label htmlFor="firstName">Nombre (s)</label>
          <div className="form-field">
            <input
              className="first-name"
              name="firstName"
              type="text"
              {...register("firstName", {
                required: true,
                pattern: /[a-zA-Z]+/,
                minLength: 4,
                maxLength: 15,
                onChange: function (e) {
                  setFirstName(e.target.value);
                },
              })}
              autoComplete="off"
            />
            {errors.firstName?.type === "pattern" && (
              <div className="error">Ingresa un nombre válido, por favor</div>
            )}
            {errors.firstName?.type === "required" && (
              <div className="error">Ingresa tu nombre, por favor</div>
            )}
            {errors.firstName?.type === "minLength" && (
              <div className="error">
                El nombre deberá tener mínimo 4 caracteres
              </div>
            )}
            <span className="img-wrapper" aria-hidden="true">
              <img width="30" height="30" alt="" src={Lock} />
            </span>
          </div>
        </div>
        <div className="fllex-wrap center form-item">
          <label htmlFor="lastName">Apellidos</label>
          <div className="form-field">
            <input
              className="last-name"
              name="lastName"
              type="text"
              {...register("lastName", {
                required: true,
                pattern: /[a-zA-Z]+/,
                minLength: 4,
                maxLength: 15,
                onChange: function (e) {
                  setLastName(e.target.value);
                },
              })}
              autoComplete="off"
            />
            {errors.lastName?.type === "pattern" && (
              <div className="error">
                No se pueden usar números ni caracteres especiales
              </div>
            )}
            {errors.lastName?.type === "required" && (
              <div className="error">Ingresa tu apellido, por favor</div>
            )}
            
            {errors.lastName?.type === "minLength" && (
              <div className="error">
                El apellido deberá tener mínimo 4 caracteres
              </div>
            )}
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

/*




            <input
            className="first-name"
              name="firstName"
              type="text"
              {...register("firstName", {
                required: true,
                minLength: 4,
                maxLength: 15,
              })}
            />

*/
