import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const LandingPage = props => {
  return (
    <Box height="100%">
      <Box
        my={2}
        py={1}
        component="header"
        color="primary.main"
        borderBottom={2}
      >
        <Typography noWrap={true} variant="h1" align="center" color="primary">
          MY BUDGET
        </Typography>
      </Box>

      <Box
        component="main"
        display="flex"
        minHeight="30vh"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Login />
        <Signup />
      </Box>
    </Box>
  );
};

export default LandingPage;
