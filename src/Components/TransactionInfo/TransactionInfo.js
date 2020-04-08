import React, { useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import UpdateTransaction from "../UpdateTransactionButton/UpdateTransactionButton";
import DeleteTransaction from "../DeleteTransactionButton/DeleteTransactionButton";
import Popover from "@material-ui/core/Popover";

const styles = {
  grid: {
    display: "grid",
    "grid-template-columns": "auto 1fr auto",
    "align-items": "center",
  },
  "inner-grid": {
    display: "grid",
    "grid-template-columns": "1.75fr 1fr",
  },
};

const TransactionInfo = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const transName = (
    <Typography noWrap>
      <strong>{props.transaction.business.toUpperCase()}</strong>
    </Typography>
  );

  const transAmount = (
    <Typography noWrap align="right">
      <em>
        {new Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
        }).format(props.transaction.amount)}
      </em>
    </Typography>
  );

  return (
    <>
      <Box my={2} className={classes.grid} onClick={handleClick}>
        {/* Large View */}
        <Hidden only={"xs"}>
          <Box mx={1} className={classes["inner-grid"]}>
            {transName}
            {transAmount}
          </Box>
        </Hidden>

        {/* Mobile View */}
        <Hidden smUp={true}>
          <Box mx={1} overflow="hidden">
            {transName}
            {transAmount}
          </Box>
        </Hidden>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
      >
        <UpdateTransaction transaction={props.transaction} />
        <DeleteTransaction transaction={props.transaction} />
      </Popover>
    </>
  );
};

export default withStyles(styles)(TransactionInfo);
