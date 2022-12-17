import * as React from "react";

const OnClickButton = (props) => {
  return (
    <button
      className={`solely-btn ${props.className ? props.className : ""}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default OnClickButton;
