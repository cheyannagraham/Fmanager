import React from "react";
import Box from "@material-ui/core/Box";


const StyledFormControl = props => {

  return (
    <Box mb={1} display="grid">
        {props.children}
    </Box>
  );
};

export default StyledFormControl;
