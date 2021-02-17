import Reat from "react";
import "../styles/Button.css";

// ({ variant, text })    "ini metode sestrukture"
const Button = ({ variant, text, action, load }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={action}>
      {load ? "loading..." : text}
    </button>
  );
};

export default Button;
