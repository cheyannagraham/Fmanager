import React, { useContext } from 'react';
import styles from './styles.gotobutton'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { ModalContext } from "../../App";
import { CloseModalButton } from '../Modal/Modal';


const GoToButton = (props) => {
    const { classes } = props;
    let showModal = useContext(ModalContext).setShowModal;

    const validateDate = () => {
        const month = document.querySelector("#goto-month").value;
        const year = document.querySelector("#goto-year").value;
        if (RegExp("[0-9]{4}").test(year)){
            showModal({show:false});
            props.setMonth(month);
            props.setYear(year);
        }
        else{
            document.querySelector("#modal-help-text").innerHTML = "Invalid Year. Correct Usage: 2015";
        }


    }

    const handleClick = () => {
        showModal({
            show: true,
            title: "Go To Date",
            content: (
                <>
                    <label htmlFor="goto-month">Date</label>
                    <input type='number' min='1' max='12' step='1' id ="goto-month" required></input>

                    <label htmlFor="goto-year">Year</label>
                    <input type='number' id ="goto-year" required></input>
                </>
            ),
            actions: (
                <>
                    <button onClick={validateDate}>Go</button>
                    <CloseModalButton />
                </>
            )
        });
    }

    return (
        <button aria-label="go to date" onClick={handleClick}>GoTo</button>
    )
}

export default withStyles(styles)(GoToButton);
