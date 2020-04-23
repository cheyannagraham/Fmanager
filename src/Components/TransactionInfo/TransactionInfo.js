import React, { useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import UpdateTransaction from "../UpdateTransactionButton/UpdateTransactionButton";
import DeleteTransaction from "../DeleteTransactionButton/DeleteTransactionButton";
import Popover from "@material-ui/core/Popover";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = withStyles({
  root: {
    cursor: "pointer",
  },
  hover: {
    "&:hover": {
      background: "rgba(255, 105, 67,0.09) !important",
    },
  },
  selected: {
    background: "rgba(255, 105, 67,0.09) !important",
  },
});

const TransactionInfo = useStyles((props) => {
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
      {new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(props.transaction.amount)}
    </Typography>
  );

  return (
    <>
      <TableRow
        hover={true}
        onClick={handleClick}
        selected={Boolean(anchorEl)}
        classes={{
          root: props.classes.root,
          selected: props.classes.selected,
          hover: props.classes.hover,
        }}
      >
        <TableCell>{transName}</TableCell>
        <TableCell>{transAmount}</TableCell>
      </TableRow>

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
});

export default TransactionInfo;
