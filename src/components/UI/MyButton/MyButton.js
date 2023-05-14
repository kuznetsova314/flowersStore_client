import React from 'react';
import "./MyButton.css"

const MyButton = ({children, size, onClick}) => {
    return (
        <button className={`myBtn-${size || "medium"}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;