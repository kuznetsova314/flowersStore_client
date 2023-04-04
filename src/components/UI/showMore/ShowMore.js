import React from 'react';
import "./ShowMore.css";

const ShowMore = ({className, children, ...props}) => {
    return (
        <div className={className ? className : "showMore"} {...props}>
            {children}
        </div>
    );
};

export default ShowMore;