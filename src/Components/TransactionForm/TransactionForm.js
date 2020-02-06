import React, { useContext, useReducer } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import { updateTransaction, addTransaction } from "../Helpers/DBHelper";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { TransContext } from "../../App/App";
import styles from "./styles.transactionform";
import moment from "moment";
import { withSnackbar } from "notistack";

const formReducer = (state, value) => {
  return {
    ...state,
    [value.input]: value.value
  };
};

const TransactionForm = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const [transactions, setTransactions] = useContext(TransContext);
  const currTrans = props.currentTransaction;
  const { classes } = props;

  // Form State
  const [formState, formDispatch] = useReducer(formReducer, {
    type: (currTrans && currTrans.type) || "income",
    date: (currTrans && currTrans.date) || moment().format("YYYY-MM-DD"),
    amount: (currTrans && currTrans.amount) || "",
    business: (currTrans && currTrans.business) || ""
  });

  const validateDate = evt => {
    const userInput = evt.target.value;
    moment(userInput).isValid()
      ? formDispatch({ input: "date", value: evt.target.value })
      : alert("err");
  };

  const createTransaction = evt => {
    showModal({ show: false });
    evt.preventDefault();
    formState.amount =
      formState.type === "income"
        ? Math.abs(formState.amount)
        : -Math.abs(formState.amount);

    if (props.type === "add") {
      addTransaction(formState)
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
      updateTransaction(currTrans.id, formState)
        .then(() => {
          const newTransactions = transactions;
          const updateIndex = newTransactions.findIndex(
            trans => trans.id === currTrans.id
          );
          newTransactions[updateIndex] = { ...formState, id: currTrans.id };
          setTransactions([...newTransactions]);
          props.enqueueSnackbar("Update Successful!", {
            variant: "success"
          });
          throw new Error("me :)");
        })
        //})
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
        value={formState.date}
        autoFocus
        onChange={validateDate}
        required
      />

      {/* Business Name Input */}
      <TextField
        label="Business"
        id="transaction-business"
        value={formState.business}
        variant="standard"
        onChange={evt =>
          formDispatch({ input: "business", value: evt.target.value })
        }
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
        value={formState.amount}
        onChange={evt =>
          formDispatch({ input: "amount", value: evt.target.value })
        }
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
        value={formState.type}
        onChange={evt =>
          formDispatch({ input: "type", value: evt.target.value })
        }
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
