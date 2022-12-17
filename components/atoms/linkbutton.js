import Link from "next/link";
import * as React from "react";

const LinkButton = (props) => {
  return (
    <button className="solely-btn">
      <Link href={props.linkto}>{props.text}</Link>
    </button>
  );
};

export default LinkButton;
