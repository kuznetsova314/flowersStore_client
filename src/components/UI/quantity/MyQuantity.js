import React, { useState } from 'react';
import "./MyQuantity.css";

const MyQuantity = ({count, setCount}) => {
    const decrement = () => {
        count <=1 ? setCount(1) : setCount(count-1)
          
    }
    return (
        <div className="quantity">
            <button 
                className="gray__btn"
                onClick={() => decrement()}
            >-</button>
            <div className="quantity__count"><span className="quantity__span">{count} </span>шт.</div>
            <button 
                className="green__btn"
                onClick={() => setCount(prev => prev + 1)}
            >+</button>
        </div>
    );
};

export default MyQuantity;