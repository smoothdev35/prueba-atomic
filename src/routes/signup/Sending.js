import {useEffect} from "react";
import Mail from "../../assets/mail.png";
function Sending({updateSending,updateSent,resend}){
    useEffect(()=>{
      setTimeout(()=>{
        updateSending(false);
        updateSent(true);
      },4000);
    },[])
    return(
        <div className="loading sending">
        <div className="flex-wrap-center loading-center">
        <div className="img-wrapper">
        <img width="100" height="100" alt="ilustracion de avion de papel en el aire" src={Mail}/>
        </div>
        <p>Te estamos {resend ? "reenviando" : "enviando" } el código...</p>
        </div>
        </div>
    )
}

export default Sending;