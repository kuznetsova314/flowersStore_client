import React, { useContext, useState } from 'react';
import BreadCrumbs from '../../UI/breadCrumbs/BreadCrumbs';
import { CABINET_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import "./CabinetProfile.css";
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import MySpan from '../../UI/MySpan/MySpan';
import { FaRegEdit } from "react-icons/fa";
import MyModal from '../../UI/modal/MyModal';
import ClientEdit from '../clientEdit/ClientEdit';

const CabinetProfile = observer(({visible, setVisible}) => {
    const {user} = useContext(Context);
    
    const totalProgress = user.ordersSum * 100 / 90000;
    return (
        <div className="cabinetProfil__inner">
            <MyModal visible={visible} setVisible={setVisible}>
                <ClientEdit setVisible={setVisible} user={user.user}/>
            </MyModal>
            <BreadCrumbs list={[
                {name: "Главная", to: SHOP_ROUTE},
                {name: "Личный кабинет", to: CABINET_ROUTE},
                {name: "Профиль", to: null},
            ]}/>
            <div className='cp__promotion'>
                <div className='cp__greenArea'>Ваша скидка - {user.promotion}%</div>
                <div className='cp__chart'>
                    <div className="cp__progress">
                        <div className="cp_blank"></div>
                        <div className="cp__procent" style={{width: totalProgress + "%"}}></div>
                    </div>
                    <div className="cp__description">
                        <div className="cp__title">Сумма заказов:</div>
                        <div className={user.promotion >= 3 ? "cp__box active" : "cp__box"} style={{left: 6 + "%"}}>
                            <div className="cp__col">
                                <div className="cp__start">От 10 000 руб.</div>
                                <div className="cp__number">3%</div>
                            </div>
                            <div className="cp__pointer"></div>
                        </div>
                        <div className={user.promotion >= 5 ? "cp__box active" : "cp__box"} style={{left: 36 + "%"}}>
                            <div className="cp__col">
                                <div className="cp__start">От 50 000 руб.</div>
                                <div className="cp__number">5%</div>
                            </div>
                            <div className="cp__pointer"></div>
                        </div>
                        <div className={user.promotion === 7 ? "cp__box active" : "cp__box"} style={{left: 40.5 + "%"}}>
                            <div className="cp__col">
                                <div className="cp__start">От 90 000 руб.</div>
                                <div className="cp__number">7%</div>
                            </div>
                            <div className="cp__pointer"></div>
                        </div>
                    </div>
                </div>
                <div className="cp__sumOrders">Сумма заказов - <MySpan>{user.ordersSum} руб.</MySpan></div>
            </div>
            <div className='cp__aboutMe'>
                <div className='cp__amBlock'>
                    <div className="cp__amTitle">Информация обо мне</div>
                    <div className="cp__amEdit" onClick={() => setVisible(true)}>
                        Редактировать
                        <FaRegEdit />
                    </div>
                </div>
                
                <div className='cp__amInner'>
                    <div className='cp__kit'>
                        <div className="cp__amText">Имя и фамилия</div>
                        <div className="cp__amInfo">{user.user.fullName}</div>
                    </div>
                    <div className='cp__kit'>
                        <div className="cp__amText">Моб. номер</div>
                        <div className="cp__amInfo">{user.user.phone}</div>
                    </div>
                    <div className='cp__kit'>
                        <div className="cp__amText">Город</div>
                        <div className="cp__amInfo">{user.user.city}</div>
                    </div>
                    <div className='cp__kit'>
                        <div className="cp__amText">Адрес</div>
                        <div className="cp__amInfo">{user.user.address}</div>
                    </div>    
                </div>
                
            </div>
        </div>
    );
});

export default CabinetProfile;