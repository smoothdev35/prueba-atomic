import { useEffect } from "react";
import checkBadge from "../../assets/checkmark@2x.png";
function Sent({ updateSent, resend, nextStep }) {
  useEffect(() => {
    setTimeout(() => {
      updateSent(false);
      nextStep();
    }, 3000);
  }, []);
  return (
    <div className="loading sent">
      <div className="flex-wrap-center loading-center">
        <div className="img-wrapper">
          <img
            width="100"
            height="100"
            alt="paloma para indicar que se ha mandado el código"
            src={checkBadge}
          />
        </div>
        <p>
          Te hemos {resend ? "reenviado" : "enviado"} el código al número que
          nos proporcionaste
        </p>
      </div>
    </div>
  );
}

export default Sent;
