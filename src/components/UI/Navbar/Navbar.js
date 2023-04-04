import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, CONTACTS_ROUTE, PROMOTIONS_ROUTE, QUESTIONS_ROUTE, REVIEWS_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import classes from "./Navbar.module.css";
import logo from "../../../images/logo.svg";
import { observer } from 'mobx-react-lite';
import {Context} from "../../../index";
import Currency from '../currency/Currency';
import DropList from '../dropList/DropList';

const Navbar = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);
    const {product} = useContext(Context);
    return (
        <nav className={classes.navbar}>
            <div className="container">
                <div className={classes.nav__inner}>
                    <div className={classes.nav__item}>
                        <Link to={CONTACTS_ROUTE} className={classes.nav__link}>Каталог</Link>
                        <Link to={REVIEWS_ROUTE} className={classes.nav__link}>Отзывы</Link>
                        <Link to={CONTACTS_ROUTE} className={classes.nav__link}>Контакты</Link>
                    </div>
                    <div className={classes.nav__item}>
                        <Link to={SHOP_ROUTE} className={classes.nav__img}>
                            <img className="img" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={classes.nav__item}>
                        <div className={classes.nav__link}>
                            <DropList 
                            color={"#5B4A58"}
                            title={"Информация для клиента"}
                            options={[
                                {name: "Акции", route: PROMOTIONS_ROUTE},
                                {name: "Вопрос-ответ", route: QUESTIONS_ROUTE}
                            ]} 
                        />  
                        </div>
                        { (user.isAdmin) ? 
                            <Link to={CONTACTS_ROUTE} className={classes.nav__link}>Админ панель</Link>
                        : (user.isWorker) ?
                            <Link to={CONTACTS_ROUTE} className={classes.nav__link}>Заказы</Link>
                        : (user.isUser) ?
                            <Link to={CONTACTS_ROUTE} className={classes.nav__link}>Мои заказы</Link>
                        :
                            <Link to={CONTACTS_ROUTE} className={classes.nav__link}>Войти</Link>
                        }
                        <Currency/>
                    </div>
                </div> 
            </div>   
        </nav>
    );
});

export default Navbar;