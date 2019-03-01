import React, {useContext} from 'react';
import '../../CSS/modal.css'
import { ModalContext } from "../../App";


const Modal = props => {
  const showModal = useContext(ModalContext).setShowModal;

    //Prop Type Alert w Ok
    return (
        props.content.type === 'alert' ? 
        
        (<div className = 'modal' id = 'modal-alert'>
            <h3>Alert</h3>
            <p>{props.content.content}</p>
            <button onClick={()=> showModal(false)}>Close</button>
         </div>
        ) :
        props.content.type === 'confirm' ?
        //Prop Type Confirm with Ok & Cancel
        
        (<div className = 'modal' id = 'modal-confirm'>
            <h3>Confirm</h3>
            <p>{props.content.content}</p>
            <button onClick={()=> {props.content.callback();showModal(false)}}>Delete</button>
            <button onClick={()=> {showModal(false)}}>Close</button>
        </div>

        ) :
        //prop Type Update
        (<div className = 'modal' >
            <h3>Notice</h3>
            <p>props.content.content</p>
            <button onClick={()=> showModal(false)}>Close</button>
        </div>
        )
    )
    // return props.content
}

export default Modal;