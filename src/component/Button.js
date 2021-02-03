import Reat from "react";
import "../styles/Button.css";

// ({ variant, text })    "ini metode sestrukture"
const Button = ({ variant, text, action }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
