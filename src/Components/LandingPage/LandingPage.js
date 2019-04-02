import React from 'react';

const LandingPage = props => {
    
    const handleLogin = () => {
        alert('login');
    }
    
    const handleSignup = () => {
        alert('login');
    }

    return (
        <div>
            <h1>LandingPage</h1>
            <div>
                <button onClick = {handleLogin}>Login</button>
                <button onClick = {handleSignup}>SignUp</button>
            </div>
        </div>
    )
}

export default LandingPage;