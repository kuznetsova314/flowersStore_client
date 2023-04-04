import React from 'react';
import MyButton from '../../UI/MyButton/MyButton';
import MySpan from '../../UI/MySpan/MySpan';
import "./Intro.css";

const Intro = () => {
    return (
        <section className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <h1 className="intro__subtitle"><MySpan>Доставка </MySpan>цветов в городе</h1>
                        <h1 className="intro__title">Владивосток</h1>
                        <MyButton>Каталог</MyButton>
                    </div>
                </div>
        </section>
    );
};

export default Intro;