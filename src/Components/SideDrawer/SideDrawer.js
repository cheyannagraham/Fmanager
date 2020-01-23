import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import useTheme from '@material-ui/core/styles/useTheme';
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";

const SideDrawer = props => {
    const theme = useTheme();
    const styles = {
        toolbar: theme.mixins.toolbar
    }
    
    return (
        <Drawer variant="permanent" open={true}>
            <TopBarSpacer/>
            <p>yo</p>
        </Drawer>

    )

}

export default SideDrawer;