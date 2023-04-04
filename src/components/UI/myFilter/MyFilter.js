import React from 'react';
import "./MyFilter.css";
const MyFilter = ({arr, title, filter, setFilter, className}) => {
    const handler = (value) => {
        if (filter.includes(value)) {
            setFilter(filter.filter(i => i !== value))
        } else {
            setFilter([...filter, value])
        } 
        
    }
    return (
        <div>
            <div className="filter__title">{title}</div>
            <div className={className}>
                {arr.map(a =>
                    <div key={a.value} className="filter__item">
                        <input 
                        id={a.value}
                        value={a.value} 
                        type="checkbox"
                        onChange={e => handler(e.target.value)}
                        className="filter__input" 
                        /> 
                        <label for={a.value} className="filter__label">{a.name}</label>
                    </div>
                )}
            </div>
            
            
            
        </div>
    );
};
//e.target.getAttribute("value")
export default MyFilter;