import React from "react";
import CloseModalButton from "../Modal/Modal";

const Catch = props => {
  return {
    show: true,
    title: `${props.title}: ${props.err.code}`,
    type: "error",
    text: props.err.message,
    actions: <CloseModalButton variant="contained" autoFocus={true} />
  };
};

export default Catch;
