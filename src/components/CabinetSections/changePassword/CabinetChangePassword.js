import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from '../../UI/breadCrumbs/BreadCrumbs';
import "./CabinetChangePassword.css";
import { CABINET_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import MySpan from '../../UI/MySpan/MySpan';
import MyButton from '../../UI/MyButton/MyButton';

const CabinetChangePassword = ({setVariant}) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('1');
    const [newPasswordSecond, setNewPasswordSecond] = useState('2');
    const [equalPassword, setEqualPassword] = useState(false)
    useEffect(() => {
        const element = document.getElementById("error");
        if(newPassword === newPasswordSecond) {
            setEqualPassword(true);
            element.setAttribute("className", "ccp__error")
         } else {
            setEqualPassword(false);
            element.setAttribute("className", "ccp__error active")
         }  
    }, [newPassword, newPasswordSecond])
    const removePasswords = () => {
        setPassword('');
        setNewPassword('');
        setNewPasswordSecond('');
        setVariant('profile')
    }
    return (
        <div className="ccp">
            <BreadCrumbs list={[
                {name: "Главная", to: SHOP_ROUTE},
                {name: "Личный кабинет", to: CABINET_ROUTE},
                {name: "Смена пароля", to: null},
            ]}/>
            <div className="ccp__block">
                <div className="ccp__header">Смена пароля</div>
                <div className="ccp__inner">
                    <div className="ccp__name">Текущий пароль</div>
                    <input type="password" required className="ccp__input" onChange={(e) => setPassword(e.target.value)}/>
                    <div className="ccp__name">Новый пароль</div>
                    <input type="password" required className="ccp__input" onChange={(e) => setNewPassword(e.target.value)}/>
                    <div className="ccp__name">Повторите <MySpan>новый</MySpan> пароль</div>
                    <input type="password" required className="ccp__input" onChange={(e) => setNewPasswordSecond(e.target.value)}/>
                    <div id="error">Пароли не совпадают</div>
                    <div className="ccp__flex">
                        <MyButton size={"gray"} onClick={() => removePasswords()}>Отмена</MyButton>
                        <MyButton size={"small"}>Сохранить</MyButton>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CabinetChangePassword;