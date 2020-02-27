import React from "react";
import { useSnackbar } from "notistack";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/snackbar";

const CustomSnackbar = props => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //   enqueueSnackbar("yo", {
  //     classes: {
  //       variantSuccess: {
  //         background: "purple"
  //       }
  //     },
  //     variant: "success"
  //   });
  return (
    <Slide direction="up" in={true} timeout={250}>
      <Box
        bgcolor="secondary.light"
        position="fixed"
        bottom="0px"
        left="0px"
        //my={1}
        p={1}
        fontSize={16}
        //borderRadius={5,0}
        zIndex={1400}
        width="100%"
        maxWidth="350px"
        display="flex"
        justifyContent="space-between"
      >
        <Box>Snackbar Content</Box>
        <Box>Snackbar Actions</Box>
      </Box>
    </Slide>
  );
};

export default CustomSnackbar;
