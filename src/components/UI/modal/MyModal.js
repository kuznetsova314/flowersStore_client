import React from 'react';
import "./MyModal.css";

const MyModal = ({children, visible, setVisible}) => {
    const body = document.getElementById("body");
    visible && body.setAttribute("style", "overflow: hidden")
    return (
        <div className={visible ? "modal active" : "modal"} onClick={() => setVisible(false)}>
            <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;