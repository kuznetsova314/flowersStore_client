import React from 'react';
import "./ReviewsItem.css";
import Rating from '../rating/Rating';
import MyHr from '../hr/MyHr';
import { getDate } from '../../../utils/changeDate';

const ReviewsItem = ({r}) => {
    return (
        <div className="ri__item" >
            <div className="ri__rating">
                <Rating ratingCurrent={r.rating} size={15}/>
            </div>
            <div className="ri__name">{r.name}</div>
            <div className="ri__block">
                <time className="ri__date">{getDate(r.date)}</time>
                <div className="ri__city">{r.city}</div>
            </div>
            <div className="ri__body">{r.body}</div>
            <MyHr />
        </div>
    );
};

export default ReviewsItem;