import React from 'react';
import { Email, Password} from '../FormInputs/FormInputs';
import Button from '@material-ui/core/Button';
import { CloseModalButton } from '../Modal/Modal';

//remove event listeners
//define error conditions for the form

const LoginForm = props => {

    const handleLogin = e => {
        e.preventDefault();
        const [email,pwd] = props.getCreds();
        props.auth.signInWithEmailAndPassword(email,pwd)
            .catch(err => props.setShowModal({
                show: true,
                title:'Login Error!',
                type:'error',
                text:
                    <>
                        <strong>{err.code} :</strong>
                        
                        <br></br>
                        <br></br>

                        {err.message}
                    </> ,
                actions: <CloseModalButton variant = 'contained' autofocus = {true} />
            }));
        //close Modal after logging in
        props.setShowModal(false);
    }  
    const variant = 'outlined';

    
    return (
        <form id = 'login' onSubmit = {handleLogin}>
            <Email autofocus = {true} variant = {variant} />
            <Password variant = {variant} />
            <div>
                <Button variant = 'contained' color = 'primary' type = 'submit'> Login </Button>
                <CloseModalButton />
            </div>
        </form>
        )
}

export default LoginForm;