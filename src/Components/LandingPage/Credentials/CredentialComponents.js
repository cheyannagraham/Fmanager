import React from 'react';

export const Email = props => {
    return (
        <label>
            Email
            <input 
            id='email'
            name='email'
            type='email'
            placeholder='user@fmanager.com'
            //{/* required */}
            />
        </label>
    );
}
export const Password = props => {
    return (
        <label>
            Password
            <input 
            id='pwd'
            name='pwd'
            type='password'
            //{/* required */}
            />
        </label>
    );
}
export const Username = props => {
    return (
        <label>
            Username
            <input 
            name='Username'
            type='text'
            //{/* required */}
            />
        </label>
    );
}

// export const BusinessInput = props => {
//     return (
//         <label className = {style.label} htmlFor={props.id}>
//           {props.label}
//           <input className = {style.input}
//             id={props.id}
//             name='business'
//             type='text'
//             placeholder='Target'
//             defaultValue = {props.value || ''}
//             required
//           />
//         </label>
//     );
//   }

