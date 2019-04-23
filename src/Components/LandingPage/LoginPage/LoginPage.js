import React from 'react';



const LoginPage = props => {

    return (
    <div>
        <h1>LandingPage</h1>
        <div>
            <button onClick={props.handleLogin}>Login</button>
            <button onClick={props.handleSignup}>SignUp</button>
        </div>
    </div>)


}


export default LoginPage;