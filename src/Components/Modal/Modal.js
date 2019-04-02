import React, { useContext } from "react";
import style from "../../CSS/modal.module.css";
import { ModalContext } from "../../App";

//possible props
//type,status,cotent,show,callback

//consider passing callbacks in buttons onClick method and avoid confirm for delete


const Modal = props => {
  const showModal = useContext(ModalContext).setShowModal;


  //Render OK button with confirm Modal. send callback to Modal to invoke on confirmation
  //Use status in class Name to display different Styles on success & failures
  return (
    <div id="modal" className={`${style.modal} ${style[props.content.type]} ${style[props.content.status]}`}>

      <h3 className={style.header}>{props.content.status}</h3>
      {typeof props.content.content === 'string' ?
        (<>
          <p className={style.p}>
            {props.content.content}
          </p>
          <CloseModalButton />
        </>
        ) :
        (props.content.content)
      }

      {/*delete confirmation*/}
      {props.content.type === "confirm" &&
        (<button className={style.button} onClick={() => {
          props.content.callback();
          showModal(false);
        }}>
          Confirm
        </button>
        )}

    </div>
  );
};


const CloseModalButton = props => {
  const showModal = useContext(ModalContext).setShowModal;
  return <button className={style.button} onClick={() => showModal(false)}>Close</button>
}


export default Modal;
export { CloseModalButton };