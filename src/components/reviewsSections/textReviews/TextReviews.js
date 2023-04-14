import React, { useContext, useState } from 'react';
import "./TextReviews.css";

import { Context } from '../../../index';
import ReviewsItem from '../../UI/reviewsItem/ReviewsItem';
import MyButton from '../../UI/MyButton/MyButton';
import SetRating from '../../UI/setRating/SetRating';

const TextReviews = () => {
    const {review} = useContext(Context);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [comment, setComment] = useState('');
    const [currentRating, setCurrentRating] = useState('');
    const [hoverRating, setHoverRating] = useState('');
    return (
        <div>
            <div className="textReviews">
                {review.reviewsText.slice(0, 6).map(r =>
                    <ReviewsItem key={r.id} r={r}/>
                )}
            </div>
            <div className="textReviews">
                <div className="tr__flex">
                    <div className="tr__block">
                        <div className="tr__name">Имя и фамилия</div>
                        <input 
                            type="text" 
                            value={fullName} 
                            placeholder="Валерий Меладзе"
                            onChange={e => setFullName(e.target.value)}
                            className="tr__input"/>
                    </div>
                    <div className="tr__block">
                        <div className="tr__name">Эл. почта</div>
                        <input 
                            type="text" 
                            placeholder="example@mail.com"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                            className="tr__input"/>
                    </div>
                    <div className="tr__block">
                        <div className="tr__name">Город</div>
                        <input 
                            type="text"
                            placeholder="Владивосток" 
                            value={city} 
                            onChange={e => setCity(e.target.value)}
                            className="tr__input"/>
                    </div>    
                </div>
                <div className="tr__comment">
                    <input 
                        type="text" 
                        value={comment}
                        placeholder="Ваш комментарий" 
                        onChange={e => setComment(e.target.value)}
                        className="tr__input"/>
                </div>
                
                <div className="tr__flex">
                    <div className="tr__flex">
                        <div className="tr__name">Оцените нашу работу</div>
                        <SetRating 
                            currentRating={currentRating} 
                            onChange={e => setCurrentRating(e)}
                            hoverRating={hoverRating}
                            setHoverRating={setHoverRating}
                        />
                    </div>
                    
                    <MyButton size={"small"}>Отправить</MyButton>
                </div>
                
            </div>    
        </div>
        
    );
};

export default TextReviews;