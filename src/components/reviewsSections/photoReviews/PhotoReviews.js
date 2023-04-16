import React, { useContext, useEffect, useState } from 'react';
import "./PhotoReviews.css";
import {Context} from "../../../index";
import { observer } from 'mobx-react-lite';
import { BsArrowRight } from "react-icons/bs";
import MyModal from '../../UI/modal/MyModal';

const PhotoReviews = observer(() => {
    const {review} = useContext(Context);
    const [visible, setVisible] = useState(false);
    const [reviewId, setReviewId] = useState('');
    const handlerReview = (e) => {
        setReviewId(e.target.getAttribute("value"));
        setVisible(true);
    }
    const visibleReview = review.reviewsPhoto.find(item => item.id === +reviewId);
    
    return (
        <div className="photoReviews">
            <MyModal 
                visible={visible}
                setVisible={setVisible}
            >
                {visible && 
                    <div className="pr__modal">
                        <div className="pr__greenText">{visibleReview.name}</div>
                        <img src={visibleReview.img} className="pr__bigImg"/>
                        <div className="pr__text">{visibleReview.body}</div>
                    </div>
                }
            </MyModal>
            {review.reviewsPhoto.slice(0, 10).map(r =>
                <div key={r.id} className="pr__item">
                    <div className="pr__block">
                        <div className="pr__img">
                            <img src={r.img}/>
                        </div>
                        <div className="pr__box">
                            <div className="pr__greenText">{r.name}</div>
                            <div className="pr__text">{r.body}</div>
                            <div 
                                className='pr__right'
                                value={r.id}
                                onClick={e => handlerReview(e)}>
                                <div 
                                    className="pr__greenText"
                                    value={r.id}
                                    onClick={e => handlerReview(e)}>
                                        Читать больше
                                </div>
                                <BsArrowRight 
                                    color={"#6AAE55"}
                                    value={r.id}
                                    onClick={e => handlerReview(e)} 
                                    size={"20px"}/>
                            </div>
                        </div>    
                    </div>
                    
                </div>
            )}
        </div>
    );
});

export default PhotoReviews;