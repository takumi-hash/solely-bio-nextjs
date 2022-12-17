import * as React from "react";

const Layout = (props) => {
  return <div className="flex flex-col text-center">{props.children}</div>;
};

export default Layout;
