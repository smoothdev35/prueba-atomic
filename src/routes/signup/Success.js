import { useEffect } from "react";

function Success({state}) {
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div className="flex-wrap-center form-wrapper success">
      <div className="sub-block">
        <h4>
          En breve recibirás un correo de confirmación por parte del equipo de
          AtomicLabs.
        </h4>
        <p>
          Recuerda revisar tu bandeja de SPAM.
          <br />
          &#161;Esperamos verte pronto!
        </p>
      </div>
    </div>
  );
}

export default Success;
