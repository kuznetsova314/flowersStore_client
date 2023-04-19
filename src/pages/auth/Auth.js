import React, { useState } from 'react';
import img from "../../images/auth.jpg";
import "./Auth.css";
import MyHr from '../../components/UI/hr/MyHr';
import MyButton from '../../components/UI/MyButton/MyButton';

const Auth = () => {
    const [variant, setVariant] = useState("sighIn");
    const [authPhone, setAuthPhone] = useState('');
    const [authFullname, setAuthFullname] = useState('');
    const [authCity, setAuthCity] = useState('');
    const [authAddress, setAuthAddress] = useState('');
    const [authPassword, setAuthPassword] = useState('');
    const [authSecondPassword, setAuthSecondPassword] = useState('');
    const [equal, setEqual] = useState(false);
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
                                        placeholder="+7 123 456 78 90"
                                        value={authPhone}
                                        onChange={(e) => setAuthPhone(e.target.value)}
                                        required/>
                                </div> 
                                <div>
                                    <div className="auth__name">Пароль:</div>
                                    <input 
                                        className="auth__input"
                                        type="password"
                                        value={authPassword}
                                        onChange={(e) => setAuthPassword(e.target.value)}
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
                                        value={authPhone}
                                        onChange={(e) => setAuthPhone(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Имя и фамилия:</div>
                                    <input 
                                        className="auth__input"
                                        type="text"
                                        placeholder="Валерий Меладзе"
                                        value={authFullname}
                                        onChange={(e) => setAuthFullname(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Город:</div>
                                    <input 
                                        className="auth__input"
                                        type="text"
                                        placeholder="Владивосток"
                                        value={authCity}
                                        onChange={(e) => setAuthCity(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Адрес:</div>
                                    <input 
                                        className="auth__input"
                                        type="text"
                                        placeholder="Владивосток"
                                        value={authAddress}
                                        onChange={(e) => setAuthAddress(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Пароль:</div>
                                    <input 
                                        className="auth__input"
                                        type="password"
                                        value={authPassword}
                                        onChange={(e) => setAuthPassword(e.target.value)}
                                        required/>
                                </div>
                                <div>
                                    <div className="auth__name">Повторите пароль:</div>
                                    <input 
                                        className="auth__input"
                                        type="password"
                                        value={authSecondPassword}
                                        onChange={(e) => setAuthSecondPassword(e.target.value)}
                                        required/>
                                </div>
                            </div>
                            }
                            <div className='auth__btn'>
                                <MyButton size={"small"}>{variant === "sighnIn" ? "Войти" : "Зарегистрироваться"}</MyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </main>
        
    );
};

export default Auth;