import React, { useRef, useState } from 'react';
import MyBlock from '../../components/UI/block/MyBlock';
import MyButton from '../../components/UI/MyButton/MyButton';
import BreadCrumbs from '../../components/UI/breadCrumbs/BreadCrumbs';
import MyHr from '../../components/UI/hr/MyHr';
import RadioInput from '../../components/UI/radioInput.js/RadioInput';
import { CABINET_ROUTE, SHOP_ROUTE, isAuth, userId } from '../../utils/consts';
import "./Ordering.css";
import BasketCard from '../../components/basketCard/BasketCard';
import MySpan from '../../components/UI/MySpan/MySpan';
import { Link } from 'react-router-dom';
import { useBasket } from '../../hooks/useBasket';
import { createOrderItem } from '../../http/productAPI';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';


const Ordering = observer(() => {
    const {user} = useContext(Context);
    const [delivery, setDelivery] = useState('delivery');
    const [period, setPeriod] = useState({time: '', date: '' , secrecy: false});
    const [recipient, setRecipient] = useState({
        who: 'myself', 
        fullName: user.user.fullName, 
        tel: user.user.phone, 
        city: user.user.city, 
        address: user.user.address, 
        note: ""
    });
    const [contacts, setContacts] = useState({
        fullName: user.user.fullName, 
        tel: user.user.phone, 
        city: user.user.city
    });
    const [payment, setPayment] = useState("cashShop");
    const [basket, basketSum, setChangeCount, deleteProduct] = useBasket();
    const timeRef = useRef(null);
    const dateRef = useRef(null);
    const recipientNameRef = useRef(null);
    const recipientTelRef = useRef(null);
    const recipientCityRef = useRef(null);
    const recipientAdressRef = useRef(null);
    const contactsNameRef = useRef(null);
    const contactsTelRef = useRef(null);
    const contactsCityRef = useRef(null);
    

    function handler(e, refItem) {
        if(e.key === "Enter") {
            if((refItem === recipientNameRef) && (delivery === "delivery")) {
                recipientNameRef.current.focus();
            } else if((refItem === recipientNameRef) && (delivery === "myself")){
                let isCheckout = window.confirm("Отправить заказ?");
                if(isCheckout) {
                checkout() 
            }
            } else {
                refItem.current.focus()
            }
            
        }
    }
    function checkKey(e) {
        if(e.key === "Enter") {
            let isCheckout = window.confirm("Отправить заказ?");
            if(isCheckout) {
                checkout() 
            }
            
        }
    }
    function checkInputs() {
        let arr = [
            {name: period.time, value: timeRef},
            {name: period.date, value: dateRef},
            {name: contacts.fullName, value: contactsNameRef},
            {name: contacts.tel, value: contactsTelRef},
            {name: contacts.city, value: contactsCityRef},
            
        ]
        let badArr = [];
        let isInputsFilled;
        if(delivery === "delivery") {
                arr.push(
                    {name: recipient.fullName, value: recipientNameRef},
                    {name: recipient.address, value: recipientAdressRef},
                    {name: recipient.tel, value: recipientTelRef},
                    {name: recipient.city, value: recipientCityRef},
                );

            }
        arr.forEach(item => {
            if(!item.name) {
                badArr.push(item);
                item.value.current.style.border = "1px solid #FF0000";
            } else {
                item.value.current.style.border = "1px solid #E0E0E0";
            }
        })
        isInputsFilled = badArr.length ? false : true;    
        return isInputsFilled    
    }
    function checkout() {
        try {
            if(isAuth()) {
                if(!checkInputs()) {
                    return alert("Заполните обязательные поля")
                }
                const products = [];
                basket.map(item => {
                    products.push({id: item.product.id, name: item.product.name, size: item.price.size, count: item.count})
                })
                const formData = new FormData();
                if(delivery === "delivery") {
                    formData.append("recipient", JSON.stringify(recipient));
                }
                formData.append("userId", userId());
                formData.append("delivery", delivery);
                formData.append("period", JSON.stringify(period));
                formData.append("products", JSON.stringify(products));
                formData.append("orderSum", basketSum);
                formData.append("contacts", JSON.stringify(contacts));
                formData.append("payment", payment);
                createOrderItem(formData).then(data => alert(data))                  
            }
        } catch(e) {
            console.log(e)
        }
        
    }

    
    return (
        <main>
            <div className="container">
                <div className="order">
                    <section className="order__section">
                        <BreadCrumbs list={[
                            {name: "Главная", to: SHOP_ROUTE}, 
                            {name: "Оформление заказа", to: null}
                        ]} />
                        <div className="order__inner">
                            <h1 className="order__header">Оформление заказа</h1>
                            
                                <div className="order__item">
                                    <MyBlock> 
                                        <div className="order__title">Способ доставки</div>
                                        <div id="radioDelivery">
                                            <RadioInput 
                                                radioId={"radioDelivery"} 
                                                setActive={e => setDelivery(e.target.value)} 
                                                list={[
                                                    {name: "Доставка по Владивостоку", value: "delivery"},
                                                    {name: "Самовывоз г. Владивосток, ул. Пушкинская, 17А", value: "shop"}
                                                ]} 
                                            />
                                        </div>
                                
                                    </MyBlock>
                                </div>
                                <div className="order__item">
                                    <MyBlock>
                                        <div className="order__title">Дата и время</div>
                                        <div className="order__block">
                                            <div className="order__text">Дата</div>
                                            <input 
                                                ref={dateRef}
                                                onKeyDown={e => handler(e, timeRef)}
                                                className="order__inputDate"
                                                type="date" 
                                                onChange={e => setPeriod({...period, date: e.target.value})}
                                            />
                                        </div>
                                        <MyHr />
                                        
                                        <div id="radioPeriod">
                                            <div className="order__block">
                                                <RadioInput 
                                                    radioId={"radioPeriod"} 
                                                    setActive={e => setPeriod({...period, time: e.target.value})} 
                                                    list={[
                                                        {name: "Указать промежуток времени", value: "established"},
                                                    ]} 
                                                />
                                                <input 
                                                    type="text" 
                                                    ref={timeRef}
                                                    onKeyDown={e => handler(e, contactsNameRef)}
                                                    className="order__inputDate"
                                                    onChange={e => setPeriod({...period, time: e.target.value})}
                                                />
                                            </div>
                                            
                                            <MyHr/>
                                            <RadioInput 
                                                radioId={"radioPeriod"} 
                                                setActive={e => setPeriod({...period, time: e.target.value})} 
                                                list={[
                                                    {name: "Позвонить получателю для уточнения времени и адреса", 
                                                    value: "unestablished"}
                                                ]} 
                                            />
                                            {period.time === "unestablished" ? 
                                                <div className="order__secrecy">
                                                    <input 
                                                        type="checkbox" 
                                                        id="secrecy" 
                                                        value={false}
                                                        onChange={e => setPeriod({...period, secrecy: e.target.checked})}
                                                    />
                                                    <label htmlFor="secrecy">По телефону не говорить, что это цветы</label>
                                                </div>
                                                
                                                
                                                :
                                                <div className="order__secrecy">
                                                    <input type="checkbox" id="secrecy" disabled/>
                                                    <label htmlFor="secrecy">По телефону не говорить, что это цветы</label>
                                                </div>
                                            }
                                        </div>
                                        
                                    </MyBlock>
                                </div>

                                <div className="order__item">
                                    <MyBlock>
                                        <div className="order__title">Ваши контакты</div>
                                        <div className="order__contacts">
                                            
                                            <div>
                                                <div className="order__inputName">Имя и фамилия</div>
                                                <input 
                                                    type="text"
                                                    ref={contactsNameRef}
                                                    onKeyDown={e => handler(e, contactsTelRef)}
                                                    className="order__input" 
                                                    value={contacts.fullName}
                                                    onChange={e => setContacts({...contacts, fullName: e.target.value})}
                                                />
                                            </div>
                                            <div>
                                                <div className="order__inputName">Моб. номер</div>
                                                <input 
                                                    type="tel"
                                                    ref={contactsTelRef}
                                                    onKeyDown={e => handler(e, contactsCityRef)}
                                                    className="order__input"
                                                    value={contacts.tel}
                                                    onChange={e => setContacts({...contacts, tel: e.target.value})} 
                                                />
                                            </div>
                                            <div>
                                                <div className="order__inputName">Город</div>
                                                <input 
                                                    type="text"
                                                    ref={contactsCityRef}
                                                    onKeyDown={e => handler(e, recipientNameRef)}
                                                    className="order__input"
                                                    value={contacts.city}
                                                    onChange={e => setContacts({...contacts, city: e.target.value})} 
                                                />
                                            </div>
                                        </div>
                                    </MyBlock>
                                </div>
                                {(delivery === "delivery") && 
                                    <div className="order__item">
                                        <MyBlock>
                                            <div className="order__title">Получатель</div>
                                            <div id="radioRecipient">
                                                <RadioInput 
                                                    radioId={"radioRecipient"} 
                                                    setActive={e => setRecipient({...recipient, who: e.target.value, fullName: "", tel: "", city: "", address: ""})} 
                                                    list={[
                                                        {name:"Я получатель", value: "myself"},
                                                        {name:"Получатель другой человек", value: "another"}
                                                    ]}
                                                />
                                            </div>
                                            <div className="order__inputs">
                                                <div className="order__InputItem">
                                                    <div className="order__inputName">Имя и фамилия</div>
                                                    <input 
                                                        ref={recipientNameRef}
                                                        onKeyDown={e => handler(e, recipientTelRef)}
                                                        className="order__input"
                                                        type="text"
                                                        value={recipient.fullName}
                                                        onChange={e => setRecipient({...recipient, fullName: e.target.value})} 
                                                    />
                                                </div>
                                                <div className="order__InputItem">
                                                    <div className="order__inputName">Моб. номер</div>
                                                    <input 
                                                        className="order__input"
                                                        ref={recipientTelRef}
                                                        onKeyDown={e => handler(e, recipientCityRef)}
                                                        type="tel"
                                                        value={recipient.tel}
                                                        onChange={e => setRecipient({...recipient, tel: e.target.value})} 
                                                    />
                                                </div>
                                                <div className="order__InputItem">
                                                    <div className="order__inputName">Город</div>
                                                    <input 
                                                        type="text" 
                                                        ref={recipientCityRef}
                                                        onKeyDown={e => handler(e, recipientAdressRef)}
                                                        className="order__input"
                                                        value={recipient.city}
                                                        onChange={e => setRecipient({...recipient, city: e.target.value})}
                                                    />
                                                </div>
                                                <div className="order__InputItem">
                                                    <div className="order__inputName">Адрес</div>
                                                    <input 
                                                        type="text" 
                                                        className="order__input"
                                                        ref={recipientAdressRef}
                                                        onKeyDown={e => checkKey(e)}
                                                        value={recipient.address}
                                                        onChange={e => setRecipient({...recipient, address: e.target.value})}
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="order__note">
                                            <div className="order__inputName">Примечание</div>
                                            <input 
                                                type="text"
                                                className="order__inputNote"
                                                value={recipient.note}
                                                onChange={e => setRecipient({...recipient, note: e.target.value})} />
                                            </div>
                                        </MyBlock>
                                    </div>                                
                                }            

                                <div className="order__item">
                                    <MyBlock>
                                        <div className="order__title">Способ оплаты</div>
                                        <div id="radioPayment">
                                            <RadioInput 
                                                setActive={e => setPayment(e.target.value)}
                                                radioId={"radioPayment"}
                                                list={[
                                                    {name: "Оплата наличными во время получения(самовызов)", value: "cashShop"}
                                                ]}
                                            />
                                            <MyHr />
                                            <RadioInput 
                                                setActive={e => setPayment(e.target.value)}
                                                radioId={"radioPayment"}
                                                list={[
                                                    {name: "Оплата наличными курьеру(только, если получатель - Вы)", value: "cashCourier"}
                                                ]}
                                            />
                                            <MyHr />
                                            <RadioInput 
                                                setActive={e => setPayment(e.target.value)}
                                                radioId={"radioPayment"}
                                                list={[
                                                    {name: "Онлайн оплата - Сбербанк", value: "card"}
                                                ]}
                                            />
                                            <MyHr />

                                        </div>
                                        
                                    </MyBlock>
                                </div>
                                <div className="order__btn">
                                    <MyButton onClick={() => checkout()} size={"small"}>Оформить заказ</MyButton>
                                </div>    
                            </div>
                    </section>
                    <section className="basketMin__section">
                        <h1 className='basketMin__header'>Корзина</h1>
                        {basket.map(p => 
                         <BasketCard 
                            variant={"min"} 
                            key={p.id} 
                            p={p} 
                            setChangeCount={setChangeCount}
                            deleteProduct={id => deleteProduct(id)}
                        />   
                        )}
                        <div className="basketMin__sum">
                            <MyBlock>
                                <div className="basketMin__block">
                                    <div className='basketMin__text'>
                                        <MySpan>Итоговая стоимость:</MySpan><div>{basketSum} руб.</div> 
                                    </div>
                                    <MyHr/>
                                    <div className="basketMin__promotion">Зайдите в <Link to={CABINET_ROUTE} className="basketMin__link">личный кабинет</Link>, чтобы проверить вашу СКИДКУ!</div>
                                </div>
                                

                            </MyBlock>
                        </div>                
                    </section>
                </div>
            </div>
        </main>
    );
});

export default Ordering;