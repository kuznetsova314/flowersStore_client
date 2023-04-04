import React from 'react';
import classes from "./MyTag.module.css";

const MyTag = ({children, tag}) => {

    return (
        <div className={tag == 'Новинка' ? classes.tag__green : classes.tag__orange}>
            {children}
        </div>
    );
};

export default MyTag;