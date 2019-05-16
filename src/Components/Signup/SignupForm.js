import React from 'react';
import { Email, Password, Username } from '../FormInputs/FormInputs';
import Button from '@material-ui/core/Button';



const SignupForm = props => {
    //for styling form
    //put in .js later

    const handleSignup = e => {
        e.preventDefault();
        const uName = document.querySelector('#username').value;
        const dName = uName ? (uName[0].toUpperCase() + uName.slice(1)).trim() : '';
        const [email, pwd] = props.getCreds();

        props.auth.createUserWithEmailAndPassword(email, pwd)
            .then(() => {
                //add username to profile
                props.auth.currentUser.updateProfile({ displayName: dName })
                    .then(() => {
                        //display username after it's added to profile
                        props.setDisplayName(dName);
                    }
                );
            })
            .catch(err => props.setShowModal({
                show: 'true',
                type: 'error',
                title: 'error',
                content:
                    <>
                        <p><b>{err.code}</b></p>
                        <p>{err.message}</p>
                        <div>
                            <Button onClick={() => props.setShowModal(false)}>Close</Button>
                        </div>
                    </>
            }))
        props.setShowModal(false);
    }

    const variant = "filled";

    return (
        <form id='signup' onSubmit = {handleSignup}>
            <Username autofocus = {true} variant={variant} />
            <Email variant={variant} />
            <Password variant={variant} />
            <div>
                <Button variant = 'contained' color = 'primary' type='submit'> Signup </Button>
                <Button variant = 'outlined' color = 'secondary' onClick={() => props.setShowModal(false)}>Close</Button>
            </div>
        </form>

    )

}

export default SignupForm;