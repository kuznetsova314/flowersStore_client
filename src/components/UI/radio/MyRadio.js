import React, { useEffect, useState } from 'react';
import MyBlock from '../block/MyBlock';
import "./MyRadio.css";

const MyRadio = ({list, setActivePrice}) => {
    
    useEffect (() => {
        const radio = document.getElementById("radio");
        const element = radio.querySelector("input:first-child");
        element.setAttribute('checked', true)       
    }, [])
    return (
        <div className="myRadio">
            {list.map(l => 
                <MyBlock 
                    key={l.value}
                    
                    variant={"medium"}
                >
                    <input 
                        className="myRadio__input"
                        onChange={e => setActivePrice(e.target.value)}
                        type="radio"
                        name="price" 
                        value={l.value} 
                        id={l.value}
                        />
                    <label for={l.value} className="myRadio__label">
                        <div className="myRadio__title">{l.size}</div>
                        <div className="myRadio__text">{l.value}</div>
                    </label>
                </MyBlock>
            )}
        </div>
    );
};

export default MyRadio;