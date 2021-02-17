import React from "react";

const Input = ({ placeholder, type, value, change }) => {
  return (
    <input
      style={myInput}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={change}
    />
  );
};

export default Input;

const myInput = {
  width: "80%",
  border: "none",
  borderBottom: "1px solid #57aef4",
  marginBottom: "2rem",
  marginLeft: "2rem",
};
