import React from 'react';
import MySpan from '../../UI/MySpan/MySpan';
import "./Advantage.css";
import car from "../../../images/shop-img/car.png";
import postcard from "../../../images/shop-img/postcard.png";
import clock from "../../../images/shop-img/clock.png";
import promotion from "../../../images/shop-img/promotion.png";

const Advantage = () => {
    return (
        <section className="section__advantage">
                <div className="container">
                    <div className="advantage">
                        <div className="adv__item">
                            <img className="adv__img" src={car}/>
                            <div className="adv__description"><MySpan>Бесплатная</MySpan> доставка по городу</div>
                        </div>
                        <div className="adv__item">
                            <img className="adv__img" src={postcard}/>
                            <div className="adv__description">Открытка <MySpan>в подарок</MySpan> и фото вручения</div>
                        </div>
                        <div className="adv__item">
                            <img className="adv__img" src={clock}/>
                            <div className="adv__description"><MySpan>Круглосуточная</MySpan> доставка</div>
                        </div>
                        <div className="adv__item">
                            <img className="adv__img" src={promotion}/>
                            <div className="adv__description">Накопительная система <MySpan>скидок</MySpan></div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Advantage;