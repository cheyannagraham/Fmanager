import React from 'react';
import styles from './styles.monthheader'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment'

const AddButton = (props) => {
    const { classes } = props;

    return (
        <Grid container justify="center" alignItems="center" className={classes["month-header"]}>
            <IconButton color="primary" className={classes.ibutton}
            onClick={() => {
                    props.handleClick(-1);
                }}>
                <ArrowLeft className={classes.icon} />
            </IconButton>

            <Typography variant="h4" color="primary" className={classes["month-title"]}>
                {`${moment(props.month, "MM").format("MMMM")} ${props.year}`}
            </Typography>

            <IconButton color="primary" className = {classes.ibutton}
                onClick={() => {
                    props.handleClick(1);
                }}>
                <ArrowRight className={classes.icon} />
            </IconButton>
        </Grid>
    )
}

export default withStyles(styles)(AddButton);
