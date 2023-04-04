import React from 'react';
import "./BreadCrumbs.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BreadCrumbs = ({list}) => {
    return (
        <nav className="bc__nav">
            {list.map(l =>
            l.to ?
                <div className="bc__block" key={l.name}>
                    <Link to={l.to} className="bc__text">{l.name}</Link>
                    <AiOutlineRight className="bc__icon" size={10} color={"#828282"}/>
                </div>
                
                :
                <div className="bc__text" key={l.name}>{l.name}</div>
            )}
        </nav>
    );
};

export default BreadCrumbs;