import React, { useContext } from "react";
import { ViewContext } from "../Main/Main";

const withViewContext = (WrappedComponent, vc) => {
  const setView = useContext(ViewContext);
  const handleClick = () => {
    setView(vc);
  };

  return props => <WrappedComponent handleClick={handleClick} {...props} />;
};

export default withViewContext;