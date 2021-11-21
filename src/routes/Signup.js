import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import mainLogo from "../assets/atomic-logo.webp";
import numberOne from "../assets/Group 4014@2x.png";
import numberTwo from "../assets/Group 4023@2x.png";
import numberThree from "../assets/Group 4024@2x.png";
import numberFour from "../assets/Group 4025@2x.png";
import checkBadge from "../assets/ic_check_tiny@2x.png";
import signupImgOne from "../assets/Group 4033.png";
import signupImgTwo from "../assets/Group 4034.png";
import signupImgThree from "../assets/Group 4038.png";
import signupImgFour from "../assets/Group 4039.png";
import FormOne from "./signup/FormOne";
import FormTwo from "./signup/FormTwo";
import Sending from "./signup/Sending";
import Sent from "./signup/Sent";
import Checked from "./signup/Checked";
import FormThree from "./signup/FormThree";
import FormFour from "./signup/FormFour";
import Success from "./signup/Success";

const icons = [numberOne, numberTwo, numberThree, numberFour];
const cosmonauts = [
  { width: "424", height: "559", src: signupImgOne },
  { width: "643", height: "728", src: signupImgTwo },
  { width: "396", height: "653", src: signupImgThree },
  { width: "497", height: "553", src: signupImgFour },
];
const Headings = [
  {
    one: "te queremos",
    two: "conocer",
  },
  {
    one: "valida tu",
    alt: "edita tu",
    two: "celular",
  },
  {
    one: "código de",
    two: "verificación",
  },
  {
    one: "términos y",
    two: "condiciones",
  },
  {
    one: "tus datos",
    two: "han sido enviados con éxito",
  },
];

const StepImg = ({ index, src, step }) => (
  <span className="img-wrapper" aria-hidden="true">
    <img
      width="50"
      height="50"
      alt=""
      src={step > index + 1 ? checkBadge : src}
    />
  </span>
);

const BigImg = ({ step }) => (
  <div
    className={
      step === 1
        ? "img-wrapper one"
        : step === 2 || step === 3
        ? "img-wrapper two"
        : step === 4
        ? "img-wrapper three"
        : step === 5
        ? "img-wrapper four"
        : ""
    }
  >
    <img
      width={
        step === 1
          ? cosmonauts[0].width
          : step === 2 || step === 3
          ? cosmonauts[1].width
          : step === 4
          ? cosmonauts[2].width
          : step === 5
          ? cosmonauts[3].width
          : ""
      }
      height={
        step === 1
          ? cosmonauts[0].height
          : step === 2 || step === 3
          ? cosmonauts[1].height
          : step === 4
          ? cosmonauts[2].height
          : step === 5
          ? cosmonauts[3].height
          : ""
      }
      alt=""
      src={
        step === 1
          ? cosmonauts[0].src
          : step === 2 || step === 3
          ? cosmonauts[1].src
          : step === 4
          ? cosmonauts[2].src
          : step === 5
          ? cosmonauts[3].src
          : ""
      }
    />
  </div>
);

const FormHeading = ({ step, number }) => (
  <div className={step < 5 ? "heading-block" : "heading-block success"}>
    {step < 5 ? (
      <div className="img-wrapper">
        <img width="50" height="50" alt="" src={icons[step - 1]} />
      </div>
    ) : null}
    <h1>
      {number ? (
        <span className="upper">
          {Headings[step - 1].alt ? Headings[step - 1].alt : null}
        </span>
      ) : (
        <span className="upper">{Headings[step - 1].one}</span>
      )}
      {step === 5 ? <br /> : null}
      <span className="upper atomic"> {Headings[step - 1].two}</span>
    </h1>
  </div>
);

function Signup() {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [sending, setSending] = useState(false);
  const [resend, setResend] = useState(false);
  const [sent, setSent] = useState(false);
  const [number, setNumber] = useState(false);

  const backHandler = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));
    if(state.step === 3){
      updateNumber(false);
      updateResend(false);
    }
  };

  const nextStep = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const updateSending = (bool) => {
    setSending(bool);
  };
  const updateSent = (bool) => {
    setSent(bool);
  };
  const updateResend = (bool) => {
    setResend(bool);
  };

  const updateNumber = (bool) => {
    setNumber(bool);
  };
  const updateNames = (str, str2) => {
    setState((prevState) => ({
      ...prevState,
      firstName: str,
      lastName: str2,
    }));
  };

  const updatePhone = (num) => {
    setState((prevState) => ({
      ...prevState,
      phone: num,
    }));
  };

  function FormEl({ step }) {
    switch (step) {
      case 1:
        return (
          <FormOne
            updateNames={updateNames}
            state={state}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <FormTwo
            updatePhone={updatePhone}
            state={state}
            updateSending={updateSending}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <FormThree
            backHandler={backHandler}
            state={state}
            updateNumber={updateNumber}
            updateSending={updateSending}
            updateSent={updateSent}
            updateResend={updateResend}
            nextStep={nextStep}
          />
        );
      case 4:
        return <FormFour state={state} nextStep={nextStep} />;
      case 5:
        return <Success state={state} />;
      default:
    }
  }

  if (sending) {
    return (
      <Sending
        updateSending={updateSending}
        updateSent={updateSent}
        resend={resend}
      />
    );
  } else if (sent) {
    if (state.step === 2) {
      return (
        <Sent updateSent={updateSent} resend={resend} nextStep={nextStep} />
      );
    } else if (state.step === 3) {
      return <Checked updateSent={updateSent} nextStep={nextStep} />;
    }
  } else {
    return (
      <header className="section signup">
        <div className="block-link">
          <div className="img-wrapper">
            <img
              width="162"
              height="81"
              alt="ilustracion de un cohete espacial, logo de atomiclabs"
              src={mainLogo}
            />
          </div>
          <Link to="/" aria-label="refrescar la pagina"></Link>
        </div>
        <article className="flex-wrap-center signup-content">
          <div className="signup-left">
            {state.step < 5 ? (
              <div className="signup-progress">
                {icons.map((icon, i) => (
                  <StepImg
                    key={i.toString()}
                    index={i}
                    src={icon}
                    step={state.step}
                  />
                ))}
                <progress max="5" value={state.step}></progress>
              </div>
            ) : null}

            {state.step > 1 && state.step < 5 ? (
              <div className="inter-nav">
                <button className="step-back" onClick={backHandler}>
                  Regresar
                </button>
              </div>
            ) : null}
            <FormHeading step={state.step} number={number} />
            <FormEl step={state.step} />
          </div>
          <div className="signup-right">
            <BigImg step={state.step} />
          </div>
        </article>
      </header>
    );
  }
}

export default Signup;

/**/
