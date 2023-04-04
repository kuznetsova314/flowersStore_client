import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACTS_ROUTE, PROMOTIONS_ROUTE, QUESTIONS_ROUTE, REVIEWS_ROUTE } from '../../../utils/consts';
import "./Menu.css";
import DropList from '../../UI/dropList/DropList';
const Menu = () => {
    return (
        <section className="menu__section">
            <div className="container">
                <nav className="menu">
                    <Link to={CONTACTS_ROUTE} className="menu__link">Каталог</Link>
                    <Link to={PROMOTIONS_ROUTE} className="menu__link">Скидки</Link>
                    <Link to={REVIEWS_ROUTE} className="menu__link">Отзывы</Link>
                    <Link to={CONTACTS_ROUTE} className="menu__link">Контакты</Link>
                    <Link to={CONTACTS_ROUTE} className="menu__link">Оферта</Link>
                    <div className="menu__link">
                        <DropList 
                        title={"Информация для клиента"}
                        options={[
                            {name: "Акции", route: PROMOTIONS_ROUTE},
                            {name: "Вопрос-ответ", route: QUESTIONS_ROUTE}
                        ]} 
                        />
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Menu;