import React, { useState } from 'react';
import "./DropList.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { Link } from 'react-router-dom';
const DropList = ({options, title, color}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="dl__list" onClick={() => setVisible(prev => !prev)}> 
            {title}
            <div className={visible ? "dl__block active" : "dl__block"}>
                {options.map(option => 
                    <Link key={option.name} to={option.route} className="dl__btm">{option.name}</Link>
                )}
            </div> 
            {visible ? 
                <AiFillCaretUp color={color ? color : "#ffffff"} className="angle__up"/>
                :
                <AiFillCaretDown color={color ? color : "#ffffff"} className="angle__down"/>
            }
            
            
        </div> 
    );
};

export default DropList;