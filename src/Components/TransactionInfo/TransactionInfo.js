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
    "grid-template-columns": "1.75fr 1fr",
  },
  item: {
    cursor: "pointer",
    "&:hover": {
      background: "rgba(255, 105, 67,0.09)"
    }
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
    <Typography noWrap>{props.transaction.business.toUpperCase()}</Typography>
  );

  const transAmount = (
    <Typography align="right">
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
      <Box py={2} onClick={handleClick} className={classes.item}>
        {/* Large View */}
        <Hidden only={"xs"}>
          <Box mx={1} className={classes.grid}>
            {transName}
            {transAmount}
          </Box>
        </Hidden>

        {/* Mobile View */}
        <Hidden smUp={true}>
          {transName}
          {transAmount}
        </Hidden>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
      >
        <UpdateTransaction color="primary" transaction={props.transaction} />
        <DeleteTransaction color="secondary" transaction={props.transaction} />
      </Popover>
    </>
  );
};

export default withStyles(styles)(TransactionInfo);
