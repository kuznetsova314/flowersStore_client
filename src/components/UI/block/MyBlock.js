import React from 'react';
import "./MyBlock.css";

const MyBlock = ({children, className, variant}) => {
    return (
        <div className={`myBlock-${variant || "small"}`}>
            {children}
        </div>
    );
};

export default MyBlock;