import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { CABINET_ROUTE } from '../../../utils/consts';
import MyButton from '../MyButton/MyButton';
import Menu from '../../shopSections/menu/Menu';


const Footer = () => {
    return (
        <footer className="footer">
            <Menu />
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__list">
                        <h4 className="footer__title">Контактная информация</h4>
                        <address>
                            <div className="footer__block">
                                <IoLocationSharp className="footer__icon" color={"#ffffff"} />
                                <Link 
                                className="footer__contact"
                                to={"https://goo.gl/maps/kPdKo7tzrKW4CBrPA"}
                                >
                                    г. Владивосток, ул. Пушкинская, 17
                                </Link>
                            </div>
                            <div className="footer__block">
                                <BsTelephoneFill className="footer__icon" color={"#ffffff"}/>
                                <div className="footer__contact">+ 7 888 888 88 88</div>
                            </div>
                            <div className="footer__block">
                                <BsTelephoneFill className="footer__icon" color={"#ffffff"}/>
                                <div className="footer__contact">+ 7 888 888 88 88</div>
                            </div>
                            <div className="footer__block">
                                <BsClock color={"#ffffff"} className="footer__icon" />
                                <div className="footer__contact">
                                    <p>Режим работы:</p>
                                    <p>Пн-Сб  с <time dateTime="8:00">8:00</time>  до <time dateTime="22:00">22:00</time></p>
                                </div>
                            </div>
                        </address>
                        
                    </div>
                    <div className="footer__list">
                        <div className="footer__title">Для посетителей</div>
                        <Link to={CABINET_ROUTE} className="footer__link">Оформеление заказа</Link>
                        <Link to={CABINET_ROUTE} className="footer__link">Вопросы и ответы</Link>
                        <Link to={CABINET_ROUTE} className="footer__link">Изменение или отмена заказа</Link>
                        <Link to={CABINET_ROUTE} className="footer__link">Способы доставки и оплаты</Link>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">Возникли вопросы? Свяжитесь с нами</div>
                        <div className="footer__complex">
                            <div className="footer__couple">
                                <div className="footer__text">Ваше имя</div>
                                <input className="footer__input" type="text" required tabIndex="1"/>
                            </div>
                            <div className="footer__couple">
                                <div className="footer__text">Моб. номер</div>
                                <input className="footer__input"  type="tel" required tabIndex="2"/>
                            </div>
                        </div>
                        
                        <input className="footer__input-last" type="text" required tabIndex="3"/>
                        <div className="footer__btn">
                            <MyButton size={"small"}>Отправить</MyButton>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;