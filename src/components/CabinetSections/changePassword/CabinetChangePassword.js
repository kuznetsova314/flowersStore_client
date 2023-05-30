import React, { useContext, useState } from 'react';
import BreadCrumbs from '../../UI/breadCrumbs/BreadCrumbs';
import "./CabinetChangePassword.css";
import { CABINET_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import MySpan from '../../UI/MySpan/MySpan';
import MyButton from '../../UI/MyButton/MyButton';
import { changePassword } from '../../../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const CabinetChangePassword = observer(({setVariant}) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordSecond, setNewPasswordSecond] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [badPassword, setBadPassword] = useState(false)
    const {user} = useContext(Context);

    function checkPasswords() {
        if(newPassword !== newPasswordSecond) {
            setPasswordError("Пароли не совпадают")
            setBadPassword(false)
        } else if (newPassword.length < 4) {
            setPasswordError("Слишком короткий пароль") 
            setBadPassword(false)
        } else {
            setPasswordError("")
            setBadPassword(true)
            createPassword()
        }
        
    }
    function createPassword() {
        try {
            changePassword({
                phone: user.user.phone, 
                oldPassword: password, 
                newPassword: newPassword
            }).then(data => {
                console.log(JSON.stringify(data))
                setBadPassword(false)
            }
                )
        } catch(e) {
            alert(e.response.data.message)
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
                    <input value={password} type="password" required className="ccp__input"  onChange={(e) => setPassword(e.target.value)}/>
                    <div className="ccp__name">Новый пароль</div>
                    <input value={newPassword} type="password"  required className="ccp__input" onChange={(e) => setNewPassword(e.target.value)}/>
                    <div className="ccp__name">Повторите <MySpan>новый</MySpan> пароль</div>
                    <input value={newPasswordSecond} type="password" required className="ccp__input" onChange={(e) => setNewPasswordSecond(e.target.value)}/>
                    {!badPassword && <div className='ccp__error'>{passwordError}</div>}
                    <div className="ccp__flex">
                        <MyButton size={"gray"} onClick={() => removePasswords()}>Отмена</MyButton>
                        <MyButton size={"small"} onClick={() => checkPasswords()}>Сохранить</MyButton>
                    </div>
                </div>
            </div>
            
        </div>
    );
});

export default CabinetChangePassword;