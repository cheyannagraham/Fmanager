import React, { useContext } from 'react';
import '../../CSS/modal.css';
import { ModalContext } from '../../App';

const Modal = props => {
  const showModal = useContext(ModalContext).setShowModal;

  //Render OK button with confirm Modal. send callback to Modal to invoke on confirmation
  //Use status in class Name to display different Styles on success & failures
  return (
    <div id='modal' className={`${props.content.type} ${props.content.status}`}>
      <h3>{props.content.status}</h3>
      {typeof props.content.content === String ? <p>{props.content.content}</p> : props.content.content}
      
      {props.content.type === 'confirm' && (
        <button onClick={() => {props.content.callback();showModal(false)}}>Confirm</button>
      )}
      <button onClick={() => showModal(false)}>Close</button>
    </div>
  );
};

export default Modal;
