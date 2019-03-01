import React, {useContext} from 'react';
import '../../CSS/modal.css'
import { ModalContext } from "../../App";


const Modal = props => {
  const showModal = useContext(ModalContext).setShowModal;

    //Prop Type Alert w Ok
    return (
        props.content.type === 'alert' ? 
        
        (<div className = 'modal-alert'>
            <h3>Alert</h3>
            <p>{props.content.content}</p>
            <button onClick={()=> showModal(false)}>Close</button>
         </div>
        ) :
        props.content.type === 'confirm' ?
        
        (<div className = 'modal-confirm'>
            <h3>Confirm</h3>
            <p>props.content.content</p>
            <button onClick={()=> showModal(false)}>Close</button>
        </div>

        ) :
        (<div className = 'modal'>
            <h3>Notice</h3>
            <p>props.content.content</p>
            <button onClick={()=> showModal(false)}>Close</button>
        </div>
        )
    )
    //Prop Type Confirm with Ok & Cancel
    //prop Type Update
    // return props.content
}

export default Modal;