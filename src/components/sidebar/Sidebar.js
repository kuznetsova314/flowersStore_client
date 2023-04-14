import React from 'react';
import "./Sidebar.css";
import { FaRegEdit } from "react-icons/fa";

const Sidebar = ({list, onClick, variant, header}) => {
    
    return (
        <div className="sidebar">
           <h2 className="sidebar__header">{header}</h2>
           <div className="sidebar__inner">   
                {list.map(l =>
                    <div className={l.value === variant ? "sidebar__item active" : "sidebar__item"} key={l.value}>
                        <div 
                            value={l.value}
                            className="sidebar__text" 
                            onClick={(e) => onClick(e.target.getAttribute("value"))}
                        >
                                {l.name}
                        </div>
                        {l.value === "profile" ? 
                            <FaRegEdit className="sidebar__icon"/>
                            :
                            <div className="sidebar__icon"></div>
                        }
                            
                    </div>
                )}
           </div>
           
        </div>
    );
};

export default Sidebar;