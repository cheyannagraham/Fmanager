import React from "react";
import { CloseModalButton } from "../Modal/Modal";

const Catch = options => {
  const { error } = options;
  
  return {
    show: true,
    title:
      options && options.title !== undefined
        ? options.title
        : error && error.code !== undefined
        ? `: ${error.code}`
        : error.name && error.name !== undefined && error.name,
    text: error && error.message !== undefined && (error.message || error.text),
    actions: <CloseModalButton variant="contained" autoFocus={true} />
  };
};

export default Catch;
