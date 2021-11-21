import { useRef } from "react";
import { useForm } from "react-hook-form";

function CustomInput({ className, name, type, value, handleChange }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const inputField = useRef(null);

  const testFunc = (event) => {
    console.log(inputField.current.value);
  };

  return (
    <>
      <input
        className={className}
        name={name}
        type={type}
        {...register(name, {
          required: true,
          minLength: 4,
          maxLength: 15,
        })}
      />
      {errors.name?.type === "required" && "First name is required"}
      {errors.name?.type === "minLength" &&
        "El nombre deberá tener minimo 5 caracteres"}
    </>
  );
}

export default CustomInput;
