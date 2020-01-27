import React, { useContext } from "react";
import { ViewContext } from "../Main/Main";

const withViewContext = (WrappedComponent, vc) => {
  const viewDispatch = useContext(ViewContext);
  const handleClick = () => {
    viewDispatch(vc);
  };

  return props => <WrappedComponent handleClick={handleClick} {...props} />;
};

export default withViewContext;
