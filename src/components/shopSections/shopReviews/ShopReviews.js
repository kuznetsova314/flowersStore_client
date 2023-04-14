import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../index';
import { REVIEWS_ROUTE } from '../../../utils/consts';
import MySpan from '../../UI/MySpan/MySpan';
import ShowMore from '../../UI/showMore/ShowMore';
import "./ShopReviews.css";
import ReviewsItem from '../../UI/reviewsItem/ReviewsItem';

const ShopReviews = observer(() => {
    const {review} = useContext(Context);
    
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
                                <ReviewsItem r={r} key={r.id} />
                            )}
                        </div>
                    </article>
                </div>
                
            </div>
            
        </section>
    );
});

export default ShopReviews;