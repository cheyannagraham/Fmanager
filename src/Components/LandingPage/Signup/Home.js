import React from 'react';
import App from '../../App';
import Button from '@material-ui/core/Button';




const SignupPage = props => {

    return (
        <div>
            <h1>HI {displayName}!</h1>
            <Button onClick={signout}>Signout</Button>
            <App />
        </div>

    )
}

export default SignupPage;