import React from 'react';
import { Email, Password, Username } from '../FormInputs/FormInputs';
import Button from '@material-ui/core/Button';
import { CloseModalButton } from '../Modal/Modal';



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
                show: true,
                type: 'error',
                title: 'Signup Error!',
                text:
                    <>
                        <strong>{err.code} :</strong>
                        
                        <br></br>
                        <br></br>
                        
                        {err.message}
                    </> ,
                actions: <CloseModalButton variant = 'contained' autofocus = {true} />
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
                <CloseModalButton />
            </div>
        </form>

    )

}

export default SignupForm;