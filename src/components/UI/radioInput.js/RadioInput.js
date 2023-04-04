import React, { useEffect } from 'react';
import "./RadioInput.css";

const RadioInput = ({list, setActive, radioId}) => {
    useEffect (() => {
        const radio = document.getElementById(radioId);
        const element = radio.querySelector("input:first-child");
        element.setAttribute('checked', true)       
    }, [])
    return (
        <div className="radioInput">
            {list.map(l => 
                <div 
                    key={l.value}
                    className="radioInput__inner"
                >
                    <input 
                        className="ri__input"
                        onChange={e => setActive(e.target.value)}
                        type="radio"
                        name={radioId} 
                        value={l.value} 
                        id={l.value}
                        />
                    <label for={l.value} className="ri__label">
                        {l.name}
                    </label>
                </div>
            )}
        </div>
    );
};

export default RadioInput;