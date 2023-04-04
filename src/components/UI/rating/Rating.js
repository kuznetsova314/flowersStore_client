import React from 'react';
import "./Rating.css";
import {FaStar} from "react-icons/fa";


const Rating = ({ratingCurrent, size, ...props}) => {
    return (
        <div>
            {[...Array(5)].map((star, i) => 
                <label key={i} >
                    <input
                        type="radio"
                        name="rating"
                        value={i+1}
                        className="rating__input"
                        {...props}
                    />
                    <FaStar
                        className="star"
                        color={(i+1) <= ratingCurrent ? "#F2C94C" : "#E0E0E0"}
                        size={size}
                    />
                </label>
            )}
        </div>
    );
};

export default Rating;