import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import {
  updateTransaction,
  getTransactions,
  addTransaction
} from "../Helpers/DBHelper";
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

  // Form State
  const [dateInput, setDateInput] = useState(
    (currTrans && currTrans.date) || moment().format("YYYY-MM-DD")
  );
  const [businessInput, setBusinessInput] = useState(
    (currTrans && currTrans.business) || ""
  );
  const [amountInput, setAmountInput] = useState(
    (currTrans && currTrans.amount) || ""
  );
  const [typeInput, setTypeInput] = useState(
    (currTrans && currTrans.type) || "income"
  );

  const validateDate = evt => {
    const userInput = evt.target.value;
    moment(userInput).isValid() ? setDateInput(evt.target.value) : alert("err");
  };

  const createTransaction = evt => {
    showModal({ show: false });
    evt.preventDefault();

    const newTrans = {
      type: typeInput,
      business: businessInput,
      amount:
        typeInput === "income"
          ? Number(Math.abs(amountInput)).toFixed(2)
          : Number(-Math.abs(amountInput)).toFixed(2),
      date: dateInput
      //timeStamp:
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
    <form
      id="transaction-form"
      className={classes.form}
      onSubmit={createTransaction}
    >
      {/* Date Input */}
      <TextField
        label="Date"
        name="trans-date"
        type="date"
        variant="standard"
        inputProps={{
          pattern: "[0-9]{2}/[0-9]{2}/[0-9]{4}"
        }}
        id="transaction-date"
        value={dateInput}
        autoFocus
        onChange={validateDate}
        required
      />

      {/* Business Name Input */}
      <TextField
        label="Business"
        id="transaction-business"
        value={businessInput}
        variant="standard"
        onChange={evt => setBusinessInput(evt.target.value)}
        required
        type="text"
        name="business-name"
      />

      {/* Amount Input */}
      <TextField
        label="Amount"
        name="trans-amount"
        type="number"
        variant="standard"
        inputProps={{
          step: 0.01
        }}
        id="transaction-amount"
        value={amountInput}
        onChange={evt => setAmountInput(evt.target.value)}
        required
      />

      {/* Transaction Type  */}
      <TextField
        select
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
        SelectProps={{
          native: true
        }}
        label="Type"
        id="transaction-type"
        name="trans-type"
        value={typeInput}
        onChange={evt => setTypeInput(evt.target.value)}
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
      </TextField>

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
