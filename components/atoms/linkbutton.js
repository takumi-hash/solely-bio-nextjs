import Link from "next/link";
import * as React from "react";

const LinkButton = (props) => {
  return (
    <button className={`solely-btn ${props.className ? props.className : ""}`}>
      <Link href={props ? props.linkto : " /"}>{props.text}</Link>
    </button>
  );
};

export default LinkButton;
