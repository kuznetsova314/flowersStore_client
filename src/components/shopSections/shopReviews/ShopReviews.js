import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { REVIEWS_ROUTE } from '../../../utils/consts';
import MySpan from '../../UI/MySpan/MySpan';
import ShowMore from '../../UI/showMore/ShowMore';
import "./ShopReviews.css";
import ReviewsItem from '../../UI/reviewsItem/ReviewsItem';
import { fetchPhotoReviews, fetchTextReviews } from '../../../http/productAPI';

const ShopReviews = () => {
    const [photoReviews, setPhotoReviews] = useState([]);
    const [textReviews, setTextReviews] = useState([]);
    useEffect(() => {
        fetchPhotoReviews(1, 4).then(data => setPhotoReviews(data));
        fetchTextReviews(1, 3).then(data => setTextReviews(data));

    }, [])
    
    return (
        <section className="shopReviews__section">
            <div className="container">
                <div className="shopReviews">
                    <article className="sr__photo">
                        <div className="sr__group">
                            <h2 className="sr__title"><MySpan>Фото</MySpan>хвасты</h2>
                            <Link className="sr__link" to={REVIEWS_ROUTE}>Больше фото</Link>
                        </div>
                        <div className="sr_pictures">
                            {photoReviews.map(r =>
                                <img src={r.img} key={r.id} className="sr__img" />
                            )}
                        </div>
                    </article>
                    <article className="sr__text">
                        <div className="sr__group">
                                <h2 className="sr__title">Отзывы</h2>
                                <Link className="sr__link" to={REVIEWS_ROUTE}>Смотреть все</Link>
                        </div>
                        <div className="sr__list">
                            {textReviews.map(r =>
                                <ReviewsItem r={r} key={r.id} />
                            )}
                        </div>
                    </article>
                </div>
                
            </div>
            
        </section>
    );
};

export default ShopReviews;