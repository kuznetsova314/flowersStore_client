import React, { useContext, useState } from 'react';
import img from "../../images/auth.jpg";
import "./Auth.css";
import MyHr from '../../components/UI/hr/MyHr';
import MyButton from '../../components/UI/MyButton/MyButton';
import { login, registration } from '../../http/userAPI';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';

const Auth = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [variant, setVariant] = useState("sighIn");
    const [phone, setPhone] = useState('');
    const [fullname, setFullname] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [equal, setEqual] = useState(false);

    const click = async () => {
        try {
            let data;
            if (variant === "sighIn") {
                data = await login(phone, password);
            } else {
                data = await registration(phone, password, fullname, city, address)
            }
            user.setUser(data)
            user.setIsAuth(true)
            data.role === "admin" ? 
                user.setIsAdmin(true) 
                : data.role === "worker" ? 
                user.setIsWorker(true) 
                : user.setIsUser(true);
            navigate(SHOP_ROUTE);
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <main>
            <section className='auth__section'>
                <div className="container">
                    <div className="auth">
                        <div className='auth__img'>
                            <img src={img}/>
                        </div>
                        
                        <div className="auth__block">
                            <div className='auth__flex'>
                                <div 
                                    className={variant === "sighIn" ? "auth__menu active" : "auth__menu"}
                                    onClick={() => setVariant("sighIn")}
                                >Войти</div>
                                <div className="auth__separator"></div>
                                <div 
                                    className={variant === "sighUp" ? "auth__menu active" : "auth__menu"}
                                    onClick={() => setVariant("sighUp")}
                                >Зарегистрироваться</div>
                            </div>
                            {variant === "sighIn" 
                            ? 
                            <div className="auth__inner">
                                <div>
                                    <div className="auth__name">Телефон:</div>
                                    <input 
                                        className="auth__input"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required/>
                                </div> 
                                <div>
                                    <div className="auth__name">Пароль:</div>
                                    <input 
                                        className="auth__input"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required/>
                                </div> 
                            </div>
                            :
                            <div className="auth__inner">
                                <div>
                                    <div className="auth__name">Телефон:</div>
                                    <input 
                                        className="auth__input"
                                        type="tel"
                                        placeholder="+7 123 456 78 90"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Имя и фамилия:</div>
                                    <input 
                                        className="auth__input"
                                        type="text"
                                        placeholder="Валерий Меладзе"
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Город:</div>
                                    <input 
                                        className="auth__input"
                                        type="text"
                                        placeholder="Владивосток"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Адрес:</div>
                                    <input 
                                        className="auth__input"
                                        type="text"
                                        placeholder="Владивосток"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Пароль:</div>
                                    <input 
                                        className="auth__input"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Повторите пароль:</div>
                                    <input 
                                        className="auth__input"
                                        type="password"
                                        value={secondPassword}
                                        onChange={(e) => setSecondPassword(e.target.value)}
                                        required/>
                                </div>
                            </div>
                            }
                            <div className='auth__btn'>
                                <MyButton size={"small"} onClick={click}>{variant === "sighIn" ? "Войти" : "Зарегистрироваться"}</MyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </main>
        
    );
};

export default Auth;