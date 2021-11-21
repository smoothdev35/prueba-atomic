function FormTwo() {
  return (
    <div className="flex-wrap-center form-wrapper step-two">
      <div className="sub-block">
        <h4>Necesitamos validar tu número para continuar.</h4>
        <p>Ingresa tu número a 10 digitos y te enviaremos un código SMS.</p>
      </div>
      <form className="flex-wrap-center step-two">
        <div className="form-item">
          <label for="phone">Número de Celular</label>
          <div className="form-field">
          <input name="phone" type="phone" required></input>
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
