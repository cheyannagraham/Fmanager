import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Footer = props => {
  return (
    <Box width="100%" textAlign="center">
      <Typography>
        <Link
          target="_blank"
          color="secondary"
          href="https://github.com/cheyannagraham"
          rel="noreferrer"
          variant="subtitle2"
        >
          Developed By Cheyanna Graham
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
