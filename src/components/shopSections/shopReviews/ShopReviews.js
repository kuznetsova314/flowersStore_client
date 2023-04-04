import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../index';
import { REVIEWS_ROUTE } from '../../../utils/consts';
import MyHr from '../../UI/hr/MyHr';
import MySpan from '../../UI/MySpan/MySpan';
import Rating from '../../UI/rating/Rating';
import ShowMore from '../../UI/showMore/ShowMore';
import "./ShopReviews.css";

const ShopReviews = observer(() => {
    const {review} = useContext(Context);
    const getDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString();
    }
    return (
        <section className="shopReviews__section">
            <div className="container">
                <div className="shopReviews">
                    <article className="sr__photo">
                        <div className="sr__group">
                            <h2 className="sr__title"><MySpan>Фото</MySpan>хвасты</h2>
                            <ShowMore><Link to={REVIEWS_ROUTE}></Link>Больше фото</ShowMore>
                        </div>
                        <div className="sr_pictures">
                            {review.reviewsPhoto.slice(0, 4).map(r =>
                                <img src={r.img} key={r.id} className="sr__img" />
                            )}
                        </div>
                    </article>
                    <article className="sr__text">
                        <div className="sr__group">
                                <h2 className="sr__title">Отзывы</h2>
                                <ShowMore><Link to={REVIEWS_ROUTE}></Link>Смотреть все</ShowMore>
                        </div>
                        <div className="sr__list">
                            {review.reviewsText.slice(0, 3).map(r =>
                                <div className="sr__item" key={r.id}>
                                    <div className="sr__rating">
                                        <Rating ratingCurrent={r.rating} size={15}/>
                                    </div>
                                    <div className="sr__name">{r.name}</div>
                                    <div className="sr__block">
                                        <time className="sr__date">{getDate(r.date)}</time>
                                        <div className="sr__city">{r.city}</div>
                                    </div>
                                    <div className="sr__body">{r.body}</div>
                                    <MyHr />
                                </div>
                            )}
                        </div>
                    </article>
                </div>
                
            </div>
            
        </section>
    );
});

export default ShopReviews;