import * as React from "react";

const OnClickButton = (props) => {
  return (
    <button className="solely-btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default OnClickButton;
