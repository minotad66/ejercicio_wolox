import React from "react";
import "./modalStyle.css";

function Modal({open,handleClick, children, modalContent, button}) {
  return (
    <div className='modal-container'>
      <div className={modalContent}>
        <button className={button} onClick = {handleClick}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
