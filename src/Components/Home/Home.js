import React from 'react';
import Main from '../Main/Main';
import Button from '@material-ui/core/Button';




const Home = props => {

    return (
        <div>
            <h1>HI {props.displayName}!</h1>
            <Button onClick={props.signout}>Signout</Button>
            <Main />
        </div>

    )
}

export default Home;