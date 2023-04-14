import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from '../../UI/breadCrumbs/BreadCrumbs';
import "./CabinetChangePassword.css";
import { CABINET_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import MySpan from '../../UI/MySpan/MySpan';
import MyButton from '../../UI/MyButton/MyButton';

const CabinetChangePassword = ({setVariant}) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordSecond, setNewPasswordSecond] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    
    const passwordHandler = (e) => {
        setNewPassword(e.target.value)
        console.log(newPassword)
        checkPasswords()
    }
    const passwordHandlerSecond = (e) => {
        setNewPasswordSecond(e.target.value)
        console.log(newPasswordSecond)
        checkPasswords()
    }
    function checkPasswords() {
        if(newPassword !== newPasswordSecond) {
            setPasswordError("Пароли не совпадают")
            if (newPassword < 4) {
            setPasswordError("Слишком короткий пароль")
        }
        } else {
            setPasswordError("")
            setPasswordDirty(false)
        }
    }
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
                    <input value={password} type="password" required className="ccp__input" onChange={(e) => setPassword(e.target.value)}/>
                    <div className="ccp__name">Новый пароль</div>
                    <input value={newPassword} type="password" onBlur={() => setPasswordDirty(true)} required className="ccp__input" onChange={(e) => passwordHandler(e)}/>
                    <div className="ccp__name">Повторите <MySpan>новый</MySpan> пароль</div>
                    <input value={newPasswordSecond} type="password" onBlur={() => setPasswordDirty(true)} required className="ccp__input" onChange={(e) => passwordHandlerSecond(e)}/>
                    {(passwordDirty && passwordError) && <div className="ccp__error">{passwordError}</div>} 
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