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
import FormOne from "./signup/FormOne";
import FormTwo from "./signup/FormTwo";
import FormThree from "./signup/FormThree";
import FormFour from "./signup/FormFour";

const icons = [numberOne, numberTwo, numberThree];
const cosmonauts = [
  { width: "424", height: "559", src: signupImgOne },
  { width: "643", height: "728", src: signupImgTwo },
  { width: "396", height: "653", src: signupImgThree },
  { width: "396", height: "653", src: signupImgThree }
];
const Headings = [
  {
    one: "te queremos",
    two: "conocer",
  },
  {
    one: "valida tu",
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
        :step === 2 || step === 3
        ? "img-wrapper two"
        : step === 4
        ? "img-wrapper three"
        : ""
    }
  >
    <img
      width={
        step === 3 || step === 4
          ? cosmonauts[2].width
          : cosmonauts[step - 1].width
      }
      height={
        step === 3 || step === 4
          ? cosmonauts[2].height
          : cosmonauts[step - 1].height
      }
      alt=""
      src={
        step === 2 || step === 3 ? cosmonauts[1].src : cosmonauts[step - 1].src
      }
    />
  </div>
);

const FormHeading = ({ step }) => (
  <div className="heading-block">
    <div className="img-wrapper">
      <img
        width="50"
        height="50"
        alt=""
        src={step === 4 ? numberFour : icons[step - 1]}
      />
    </div>
    <h1>
      <span className="upper">{Headings[step - 1].one}</span>
      <span className="upper atomic"> {Headings[step - 1].two}</span>
    </h1>
  </div>
);

function Signup() {
  const [state, setState] = useState({
    step: 4,
    firstName: "",
    lastName: "",
    phone: "",
  });

  const backHandler = () => {
    const { step } = state;
    setState({ step: step - 1 });
  };

  const nextStep = () => {
    const { step } = state;
    setState({ step: step + 1 });
  };

  const handleChange = (event) => {
    if (event.target.name === "fname") {
      setState({ firstName: event.target.value });
    } else if (event.target.name === "lname") {
      setState({ lastName: event.target.value });
    } else if (event.target.name === "phone") {
      setState({ phone: event.target.value });
    }
  };

  function FormEl({ step }) {
    switch (step) {
      case 1:
        return <FormOne handleChange={handleChange} />;
      case 2:
        return <FormTwo handleChange={handleChange} />;
      case 3:
        return <FormThree handleChange={handleChange} />;
      case 4:
        return <FormFour handleChange={handleChange} />;
      default:
    }
  }

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
          <div className="signup-progress">
            {icons.map((icon, i) => (
              <StepImg
                key={i.toString()}
                index={i}
                src={icon}
                step={state.step}
              />
            ))}
            <span className="img-wrapper">
              <img width="50" height="50" alt="etapa 4" src={numberFour} />
            </span>
            <progress max="5" value={state.step}></progress>
          </div>
          {state.step > 1 ? (
            <div className="inter-nav">
              <button className="step-back" onClick={backHandler}>
                Regresar
              </button>
            </div>
          ) : null}
          <FormHeading step={state.step} />
          <FormEl step={state.step} />
        </div>
        <div className="signup-right">
          <BigImg step={state.step} />
        </div>
      </article>
    </header>
  );
}

export default Signup;

/**/
