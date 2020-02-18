import React from "react";
import { CloseModalButton } from "../Modal/Modal";

const Catch = options => {
  return {
    show: true,
    title:
      options && options.title !== undefined
        ? `${options.title}:`
        : options.err && options.err.code !== undefined
        ? options.err.code
        : options.err.name && options.err.name !== undefined && options.err.name,
    text: options && options.message !== undefined && options.err.message,
    actions: <CloseModalButton variant="contained" autoFocus={true} />
  };
};

export default Catch;
