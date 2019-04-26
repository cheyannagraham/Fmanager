import React from 'react';
import AppContent from '../../../AppContent';
import Button from '@material-ui/core/Button';




const Home = props => {

    return (
        <div>
            <h1>HI {props.displayName}!</h1>
            <Button onClick={props.signout}>Signout</Button>
            <AppContent />
        </div>

    )
}

export default Home;