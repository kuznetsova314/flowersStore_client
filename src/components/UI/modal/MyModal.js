import React from 'react';
import "./MyModal.css";

const MyModal = ({children, visible, setVisible}) => {
    return (
        <div className={visible ? "modal active" : "modal"} onClick={() => setVisible(false)}>
            <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;