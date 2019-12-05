import React from 'react';
import styles from './styles.addbutton'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const AddButton = (props) => {
    const { classes } = props;

    return (
        <Grid className={classes['fab-container']} container justify='flex-end'>
            <Fab size="small" color="secondary"  aria-label="add transaction"
                onClick={props.showAddForm}>
                <AddIcon />
            </Fab>
        </Grid>
    )
}

export default withStyles(styles)(AddButton);
