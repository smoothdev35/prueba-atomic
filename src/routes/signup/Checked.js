import { useEffect } from "react";
import checkBadge from "../../assets/checkmark@2x.png";
function Checked({ updateSent, nextStep }) {
  useEffect(() => {
    setTimeout(() => {
      updateSent(false);
      nextStep();
    }, 3000);
  }, []);
  return (
    <div className="loading checked">
      <div className="flex-wrap-center loading-center">
        <div className="img-wrapper">
          <img
            width="100"
            height="100"
            alt="paloma para indicar que se ha verificado el código"
            src={checkBadge}
          />
        </div>
        <p>Hemos validado el código</p>
      </div>
    </div>
  );
}

export default Checked;
