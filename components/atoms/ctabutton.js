import Link from "next/link";
import * as React from "react";

const CtaButton = (props) => {
  return (
    <button className="solely-btn solely-gradient">
      <Link href={props.linkto}>{props.text}</Link>
    </button>
  );
};

export default CtaButton;
