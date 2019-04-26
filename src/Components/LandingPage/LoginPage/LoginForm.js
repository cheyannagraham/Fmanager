import React from 'react';
import { Email, Password} from '../../FormInputs/FormInputs';
import Button from '@material-ui/core/Button';
import { CloseModalButton } from '../../Modal/Modal';

//remove event listeners
//define error conditions for the form

const LoginForm = props => {
    const variant = 'outlined';

    const handleLogin = e => {
        e.preventDefault();
        const [email,pwd] = props.getCreds();
        props.auth.signInWithEmailAndPassword(email,pwd)
            .catch(err => props.setShowModal({
                show: true,
                title:'Login Error!',
                type:'error',
                content:
                    <>
                        <p><b>{err.code}</b></p>
                        <p>{err.message}</p>
                    </> ,
                actions: <CloseModalButton />
            }));
        //close Modal after logging in
        props.setShowModal(false);
    }  
    
    return (
        <form id = 'login' onSubmit = {handleLogin}>
            <Email variant = {variant} />
            <Password variant = {variant} />
            <div>
                <Button type = 'submit'> Login </Button>
                <Button onClick={() => props.setShowModal(false)}>Close</Button>
            </div>
        </form>
        )
}

export default LoginForm;