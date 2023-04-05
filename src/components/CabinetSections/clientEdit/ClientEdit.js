import React, { useState } from 'react';
import "./ClientEdit.css";
import { RxCross1 } from "react-icons/rx";
import MyButton from '../../UI/MyButton/MyButton';

const ClientEdit = ({setVisible, user}) => {
    const [fullName, setFullname] = useState(user.fullName);
    const [phone, setPhone] = useState(user.phone);
    const [city, setCity] = useState(user.city);
    const [address, setAddress] = useState(user.address);
    
    const saveChanges = () => {
        const newUser = {fullName: fullName, phone: phone, city: city, address: address};
        console.log(newUser)
    }

    return (
        <div className="clientEdit">
            <div className="ce__flex">
                <h3 className="ce__title">Информация обо мне</h3>
                <RxCross1 className="ce__icon" onClick={() => setVisible(false)}/>
            </div>
            
            
            <div className='ce__inputs'>
                <div className='ce__kit'>
                    <div className="ce__text">Имя и фамилия</div>
                    <input
                        value={fullName} 
                        onChange={e => setFullname(e.target.value)}
                        type="text" 
                        
                        className="ce__input"
                    />
                </div>
                <div className='ce__kit'>
                    <div className="ce__text">Моб. номер</div>
                    <input 
                        type="tel"
                        onChange={e => setPhone(e.target.value)} 
                        value={phone} 
                        className="ce__input"
                    />
                </div>
                <div className='ce__kit'>
                    <div className="ce__text">Город</div>
                    <input 
                        type="text"
                        onChange={e => setCity(e.target.value)} 
                        value={city} 
                        className="ce__input"
                    />
                </div>
                <div className='ce__kit'>
                    <div className="ce__text">Адрес</div>
                    <input 
                        type="text" 
                        onChange={e => setAddress(e.target.value)}
                        value={address} 
                        className="ce__input"
                    />
                </div>    
            </div>
            <div className='ce__flex'>
                <MyButton size={"small"} onClick={() => saveChanges()}>Сохранить</MyButton>
            </div>
        </div>
                
    );
};

export default ClientEdit;