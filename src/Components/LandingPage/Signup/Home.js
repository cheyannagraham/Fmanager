import React from 'react';
import App from '../../../App';
import Button from '@material-ui/core/Button';




const Home = props => {

    return (
        <div>
            <h1>HI {props.displayName}!</h1>
            <Button onClick={props.signout}>Signout</Button>
            <App />
        </div>

    )
}

export default Home;