import React from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    spacer: theme.mixins.toolbar
}));

const TopBarSpacer = props => {
    const  classes = useStyles();
    return (
        <Box className={classes.spacer} />
    )
}

export default TopBarSpacer;