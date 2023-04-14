import React, { useContext } from 'react';
import "./CabinetOrders.css";
import { observer } from 'mobx-react-lite';
import {Context} from "../../../index";
import BreadCrumbs from '../../UI/breadCrumbs/BreadCrumbs';
import { CABINET_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import MyHr from '../../UI/hr/MyHr';
import { getDate } from '../../../utils/changeDate';

const CabinetOrders = observer(() => {
    const {user} = useContext(Context);
    function transleteWords(word) {
        let temp = word === "delivered" ? "Доставлено" : 
            word === "handling" ? "В обработке" : 
            word === "paid" ? "Оплачен" : null;
            return temp;
    }
    return (
        <div className="cabinetOrders">
            <BreadCrumbs list={[
                {name: "Главная", to: SHOP_ROUTE},
                {name: "Личный кабинет", to: CABINET_ROUTE},
                {name: "Мои заказы", to: null},
            ]}/>
            <div className="co__inner">
                {user.orders.map(o =>
                   <div key={o.number}>
                        <div className="co__items">
                            <div className="co__left">
                                <div className="co__title">Дата заказа</div>
                                <div className="co__text">{getDate(o.date)}</div>
                                <div className="co__title">Номер заказа</div>
                                <div className="co__text">{o.number}</div>
                            </div>
                            <div className="co__left">
                                <div className="co__title">Наименование:</div>
                                {o.products.map(p =>
                                    <div key={p.id} className="co__product">
                                        <div className="co__productInner">
                                            <div className="co__name">{p.name}</div>
                                            <div className="co__hrVertival"/>
                                            <div className="co__text">x{p.count} {p.price} руб.</div>
                                        </div>
                                        <hr className="co__hrHorizontal"/>
                                    </div>
                                )}
                            </div>
                            <div className="co__right">
                                <div className="co__title">Сумма</div>
                                <div className="co__text"><b>{o.orderSum} руб.</b></div>
                            </div>
                            <div className="co__right">
                                <div className="co__title">Статус</div>
                                <div className={`co__status ${o.status}`}><b>{transleteWords(o.status)}</b></div>
                            </div>
                        </div>
                        <MyHr/>    
                    </div> 
                )}
                
            </div>
        </div>
    );
});

export default CabinetOrders;