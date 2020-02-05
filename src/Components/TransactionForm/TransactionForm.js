import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  updateTransaction,
  getTransactions,
  addTransaction
} from "../Helpers/DBHelper";
import { validateDate } from "../Helpers/DateHelper";
import { FormControl } from "../FormControls/FormControls";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { TransContext } from "../../App/App";
import styles from "./styles.transactionform";
import moment from "moment";
import { withSnackbar } from "notistack";

const TransactionForm = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const [, setTransactions] = useContext(TransContext);
  const currTrans = props.currentTransaction;
  const { classes } = props;

  const handleClick = e => {
    e.preventDefault();
    const userInput = document.getElementById("transaction-date").value;
    const validDate = validateDate(userInput);

    if (validDate) {
      showModal({ show: false });
      createTransaction(validDate);
    } else {
      showModal({
        show: true,
        title: "Validation Error!",
        type: "error",
        text:
          "Invalid Date. please enter a date between 1-1-1900 and 12-31-2050",
        actions: <CloseModalButton autoFocus={true} />
      });
    }
  };

  const createTransaction = date => {
    const type = document.getElementById("transaction-type").value;
    const amount = Math.abs(
      document.getElementById("transaction-amount").value
    );

    const newTrans = {
      type: type,
      business: document.getElementById("transaction-business").value,
      amount:
        type === "income"
          ? Number(amount).toFixed(2)
          : Number(-amount).toFixed(2),
      date: date
    };

    if (props.type === "add") {
      addTransaction(newTrans)
        // add new transaction to local global copy of transactions
        .then(trans => {
          setTransactions(prev => [...prev, trans]);
          props.enqueueSnackbar("Transaction Added!", {
            variant: "success"
          });
          throw new Error("me :)");
        })
        .catch(err => {
          const sbar = props.enqueueSnackbar("Transaction Error!", {
            variant: "error",
            action: (
              <>
                <Button
                  onClick={() => {
                    props.closeSnackbar(sbar);
                    showModal({
                      show: true,
                      title: err.name,
                      type: "error",
                      actions: <CloseModalButton autoFocus={true} />,
                      text: err.message
                    });
                  }}
                >
                  Info
                </Button>
              </>
            )
          });
        });
    }

    if (props.type === "update") {
      updateTransaction(currTrans.id, newTrans)
        .then(() => {
          getTransactions().then(tr => {
            setTransactions(tr);
            props.enqueueSnackbar("Update Successful!", {
              variant: "success"
            });
            
          });
          throw new Error("me :)");
        })
        .catch(err => {
          const sbar = props.enqueueSnackbar("Error Updating!", {
            variant: "error",
            action: (
              <>
                <Button
                  onClick={() => {
                    props.closeSnackbar(sbar);
                    showModal({
                      show: true,
                      title: err.name,
                      type: "error",
                      actions: <CloseModalButton autoFocus={true} />,
                      text: err.message
                    });
                  }}
                >
                  Info
                </Button>
              </>
            )
          });
        });
    }
  };

  return (
    <form id="transaction-form" className={classes.form} onSubmit={handleClick}>
      {/* Date Input */}
      <FormControl
        label="Date"
        name="trans-date"
        type="date"
        inputProps={{
          pattern: "[0-9]{2}/[0-9]{2}/[0-9]{4}"
        }}
        id="transaction-date"
        value={(currTrans && currTrans.date) || moment().format("YYYY-MM-DD")}
        autoFocus
        required
      />

      {/* Business Name Input */}
      <FormControl
        label="Business"
        id="transaction-business"
        value={currTrans && currTrans.business}
        required
        type="text"
        name="business-name"
      />

      {/* Amount Input */}
      <FormControl
        label="Amount"
        name="trans-amount"
        type="number"
        inputProps={{
          step: 0.01
        }}
        id="transaction-amount"
        value={currTrans && currTrans.amount}
        required
      />

      {/* Transaction Type  */}
      <FormControl
        select
        InputLabelProps={{
          shrink: true
        }}
        SelectProps={{
          native: true
        }}
        label="Type"
        id="transaction-type"
        name="trans-type"
        value={currTrans && currTrans.type}
        required
      >
        <>
          <option key="income" value="income">
            Income
          </option>
          <option key="purchase" value="purchase">
            Purchase
          </option>
        </>
      </FormControl>

      {/* Form Buttons */}
      <Grid
        container
        justify="flex-end"
        className={classes["button-container"]}
      >
        <Button variant="contained" color="primary" type="submit">
          {props.type}
        </Button>
        <CloseModalButton />
      </Grid>
    </form>
  );
};

export default withStyles(styles)(withSnackbar(TransactionForm));
