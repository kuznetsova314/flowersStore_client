import React from 'react';
import "./Steps.css";
import daubGreen from "../../../images/shop-img/left_2.png";
import daubRed from "../../../images/shop-img/left_3.png";
import leftBranch from "../../../images/shop-img/branch_left.png";
import rightBranch from "../../../images/shop-img/branch_right.png";
import MySpan from '../../UI/MySpan/MySpan';

const Steps = () => {
    const options = [
        {id: 1, title: "Выберите букет", text: "В каталоге выберите понравившийся букет"},
        {id: 2, title: "Выберите размер и дополнение", text: "На странице с описанием букета выберите подходящий размер. По желанию, добавьте к букету мягкую игрушку, сладости или любой другой подарок"},
        {id: 3, title: "Укажите данные для доставки", text: "Заполните форму доставки и оплатите заказ удобным для вас способом"},
        {id: 4, title: "Букет готов!", text: "Букет будет собран из свежайших цветов и доставлен получателю к указанной дате и времени"},
    ]
    const images = [
        {id: "daubGreenLeft", src: daubGreen},
        {id: "daubGreenRight", src: daubGreen},
        {id: "daubRedLeft", src: daubRed},
        {id: "daubRedRight", src: daubRed},
        {id: "leftBranch", src: leftBranch},
        {id: "rightBranch", src: rightBranch},
    ]
    return (
        <section className="steps__section">
            {images.map(i => 
                <img className="steps__img" key={i.id} src={i.src} id={i.id} />
            )}
            <div className="container">
                <h2 className="steps__header"><MySpan>Заказать</MySpan> в 5 шагов</h2>
                <div className="steps">
                    {options.map(option => 
                        <div className="steps__item" key={option.id}>
                            <div className="steps__id">
                                <div className="steps__number">
                                    {option.id}
                                </div>
                            </div>
                            <div className="steps__group">
                                <h4 className="steps__title">{option.title}</h4>
                                <div className="steps__text">{option.text}</div>
                            </div>
                            
                        </div>
                    )}
                </div>
                
                
            </div>
        </section>
    );
};

export default Steps;