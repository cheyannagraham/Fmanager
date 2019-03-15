import React, { useContext } from "react";
import style from "../../CSS/modal.module.css";
import { ModalContext } from "../../App";

const Modal = props => {
  console.log(props);
  const showModal = useContext(ModalContext).setShowModal;

  //Render OK button with confirm Modal. send callback to Modal to invoke on confirmation
  //Use status in class Name to display different Styles on success & failures
  return (
    <div id="modal" className = {`${style.modal} ${style[props.content.type]} ${style[props.content.status]}`}>
      
      <h3 className = {style.header}>{props.content.status}</h3>

      {typeof props.content.content === String ? 
        (<p className={style.p}>
          {props.content.content}
        </p>) :
       (props.content.content)
      }

      <div className = {style['buttons-container']}>
        
        {props.content.type === "confirm" &&
        (<button className = {style.button} onClick={() => {
              props.content.callback();
              showModal(false);
            }}>
            Confirm
          </button>
        )}

        <button className = {style.button} onClick={() => showModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
