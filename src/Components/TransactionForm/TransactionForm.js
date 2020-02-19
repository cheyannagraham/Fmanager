import React, { useContext, useReducer } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { updateTransaction, addTransaction } from "../Helpers/DBHelper";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { TransContext } from "../../App/App";
import moment from "moment";
import { withSnackbar } from "notistack";
import QueueSnackbar from "../QueueSnackbar/QueueSnackbar";
import { Box } from "@material-ui/core";
import Catch from "../Catch/Catch";

const formReducer = (state, value) => {
  return {
    ...state,
    [value.input]: value.value
  };
};

const TransactionForm = props => {
  const modalContent = useContext(ModalContext);
  const [transactions, setTransactions] = useContext(TransContext);
  const currTrans = props.currentTransaction;

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
      : alert("error");
  };

  const createTransaction = evt => {
    modalContent({ show: false });
    evt.preventDefault();
    formState.amount =
      formState.type === "income"
        ? Math.abs(formState.amount).toFixed(2)
        : (Math.abs(formState.amount) * -1).toFixed(2);

    if (props.type === "add") {
      addTransaction(formState)
        // add new transaction to local global copy of transactions
        .then(trans => {
          setTransactions(prev => [...prev, trans]);
          QueueSnackbar(() =>
            props.enqueueSnackbar("Add Successful!", {
              variant: "success"
            })
          );
          throw new Error("me :)");
        })
        .catch(error => {
          QueueSnackbar(() => {
            const sbar = props.enqueueSnackbar("Add Error!", {
              variant: "error",
              action: (
                <>
                  <Button
                    onClick={() =>
                      modalContent(Catch({ error: error, title: "Add Error" }))
                    }
                  >
                    Info
                  </Button>
                  <Button onClick={() => props.closeSnackbar(sbar)}>
                    Close
                  </Button>
                </>
              )
            });
          });
        });
    }

    if (props.type === "update") {
      updateTransaction(currTrans.id, formState)
        .then(() => {
          setTransactions([
            ...transactions.filter(trans => trans.id !== currTrans.id),
            { ...formState, id: currTrans.id }
          ]);
          QueueSnackbar(() =>
            props.enqueueSnackbar("Update Successful!", {
              variant: "success"
            })
          );
          throw new Error("me :)");
        })
        //})
        .catch(error =>
          QueueSnackbar(() => {
            const sbar = props.enqueueSnackbar("Update Error!", {
              variant: "error",
              action: (
                <>
                  <Button
                    onClick={() =>
                      modalContent(
                        Catch({ error: error, title: "Update Error" })
                      )
                    }
                  >
                    Info
                  </Button>
                  <Button onClick={() => props.closeSnackbar(sbar)}>
                    Close
                  </Button>
                </>
              )
            });
          })
        );
    }
  };

  return (
    <form id="transaction-form" onSubmit={createTransaction}>
      <Box display="grid">
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
        <Grid container justify="flex-end">
          <Button variant="contained" type="submit">
            {props.type}
          </Button>
          <CloseModalButton />
        </Grid>
      </Box>
    </form>
  );
};

export default withSnackbar(TransactionForm);
