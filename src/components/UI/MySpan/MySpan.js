import React from 'react';
import "./MySpan.css";

const MySpan = ({children, ...props}) => {
    return (
        <span {...props} className="MySpan">
            {children}
        </span>
    );
};

export default MySpan;