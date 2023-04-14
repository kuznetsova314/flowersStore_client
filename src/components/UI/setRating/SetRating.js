import React from 'react';
import "./SetRating.css";
import {FaStar} from "react-icons/fa";

const SetRating = ({currentRating, onChange, size}) => {
    return (
        <div className="setRating">
            {[...Array(5)].map((star, i) => 
                <label key={i} >
                    <input
                        type="radio"
                        name="rating"
                        value={i+1}
                        className="setRating__input"
                        onChange={e => onChange(e.target.value)}
                    />
                    <FaStar
                        className="setRating__star"
                        color={(i+1) <= currentRating ? "#F2C94C" : "#E0E0E0"}
                        size={size}
                    />
                </label>
            )}
        </div>
    );
};

export default SetRating;