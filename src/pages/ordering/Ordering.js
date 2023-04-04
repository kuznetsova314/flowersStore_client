import React, { useContext, useEffect, useState } from 'react';
import MyBlock from '../../components/UI/block/MyBlock';
import MyButton from '../../components/UI/MyButton/MyButton';
import BreadCrumbs from '../../components/UI/breadCrumbs/BreadCrumbs';
import MyHr from '../../components/UI/hr/MyHr';
import RadioInput from '../../components/UI/radioInput.js/RadioInput';
import { CABINET_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import "./Ordering.css";
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import BasketCard from '../../components/basketCard/BasketCard';
import MySpan from '../../components/UI/MySpan/MySpan';
import { Link } from 'react-router-dom';


const Ordering = observer(() => {
    const {basket} = useContext(Context);
    const [delivery, setDelivery] = useState('delivery');
    const [period, setPeriod] = useState({time: 'established', date: '' , secrecy: false});
    const [recipient, setRecipient] = useState({who: 'myself', fullName: "", tel: "", city: "", address: "", note: ""});
    const [contacts, setContacts] = useState({fullName: "", tel: "", city: ""});
    const [payment, setPayment] = useState("cashShop");
    

    useEffect(()=>{
        console.log(delivery);
        console.log(JSON.stringify(period))
    }, [period, delivery])
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
                                            <RadioInput radioId={"radioDelivery"} setActive={e => setDelivery(e)} list={[
                                                {name: "Доставка по Владивостоку", value: "delivery"},
                                                {name: "Самовывоз г. Владивосток, ул. Пушкинская, 17А", value: "shop"}
                                            ]} />
                                        </div>
                                
                                    </MyBlock>
                                </div>
                                <div className="order__item">
                                    <MyBlock>
                                        <div className="order__title">Дата и время</div>
                                        <div className="order__block">
                                            <div className="order__text">Дата</div>
                                            <input 
                                                className="order__inputDate"
                                                type="date" 
                                                onChange={e => setPeriod({...period, date: e.target.value})}
                                            />
                                        </div>
                                        <MyHr />
                                        
                                        <div id="radioPeriod">
                                            <div className="order__block">
                                                <RadioInput radioId={"radioPeriod"} setActive={e => setPeriod({...period, time: e})} list={[
                                                    {name: "Указать промежуток времени", value: "established"},
                                                ]} />
                                                <input 
                                                    type="time" 
                                                    className="order__inputDate"
                                                    onChange={e => setPeriod({...period, time: e.target.value})}
                                                />
                                            </div>
                                            
                                            <MyHr/>
                                            <RadioInput radioId={"radioPeriod"} setActive={e => setPeriod({...period, time: e})} list={[
                                                {name: "Позвонить получателю для уточнения времени и адреса", value: "unestablished"}
                                            ]} />
                                            {period.time === "unestablished" ? 
                                                <div className="order__secrecy">
                                                    <input 
                                                        type="checkbox" 
                                                        id="secrecy" 
                                                        value={false}
                                                        onChange={e => setPeriod({...period, secrecy: e.target.checked})}/>
                                                    <label for="secrecy">По телефону не говорить, что это цветы</label>
                                                </div>
                                                
                                                
                                                :
                                                <div className="order__secrecy">
                                                    <input type="checkbox" id="secrecy" disabled/>
                                                    <label for="secrecy">По телефону не говорить, что это цветы</label>
                                                </div>
                                            }
                                        </div>
                                        
                                    </MyBlock>
                                </div>    
                            <div className="order__item">
                                <MyBlock>
                                    <div className="order__title">Дата и время</div>
                                    <div id="radioRecipient">
                                        <RadioInput radioId={"radioRecipient"} setActive={e => setRecipient(e)} list={[
                                            {name:"Я получатель", value: "myself"},
                                            {name:"Получатель другой человек", value: "another"}
                                        ]}/>
                                    </div>
                                    <div className="order__inputs">
                                        <div className="order__InputItem">
                                            <div className="order__inputName">Имя и фамилия</div>
                                            <input 
                                                className="order__input"
                                                type="text"
                                                value={recipient.fullName}
                                                onChange={e => setRecipient({...recipient, fullName: e.target.value})} 
                                                placeholder="Валерий Меладзе"
                                            />
                                        </div>
                                        <div className="order__InputItem">
                                            <div className="order__inputName">Моб. номер</div>
                                            <input 
                                                className="order__input"
                                                type="tel"
                                                value={recipient.tel}
                                                onChange={e => setRecipient({...recipient, tel: e.target.value})} 
                                                placeholder="+7-123-456-78-90"/>
                                        </div>
                                        <div className="order__InputItem">
                                            <div className="order__inputName">Город</div>
                                            <input 
                                                type="text" 
                                                className="order__input"
                                                value={recipient.city}
                                                onChange={e => setRecipient({...recipient, city: e.target.value})}
                                                placeholder="Владивосток"/>
                                        </div>
                                        <div className="order__InputItem">
                                            <div className="order__inputName">Адрес</div>
                                            <input 
                                                type="text" 
                                                className="order__input"
                                                value={recipient.address}
                                                onChange={e => setRecipient({...recipient, address: e.target.value})}
                                                placeholder="г.Владивосток, ул. Фокина, 15"/>
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
                            <div className="order__item">
                                <MyBlock>
                                    <div className="order__title">Ваши контакты</div>
                                    <div className="order__contacts">
                                        
                                        <div>
                                            <div className="order__inputName">Имя и фамилия</div>
                                            <input 
                                                type="text"
                                                className="order__input" 
                                                value={contacts.fullName}
                                                onChange={e => setContacts({...contacts, fullName: e.target.value})}
                                                placeholder="Валерий Меладзе"/>
                                        </div>
                                        <div>
                                            <div className="order__inputName">Моб. номер</div>
                                            <input 
                                            type="tel"
                                            className="order__input"
                                            value={contacts.tel}
                                            onChange={e => setContacts({...contacts, tel: e.target.value})} 
                                            placeholder=""/>
                                        </div>
                                        <div>
                                            <div className="order__inputName">Город</div>
                                            <input 
                                                type="text"
                                                className="order__input"
                                                value={contacts.city}
                                                onChange={e => setContacts({...contacts, city: e.target.value})} 
                                                placeholder="Владивосток"/>
                                        </div>
                                    </div>
                                </MyBlock>
                            </div>
                            <div className="order__item">
                                <MyBlock>
                                    <div className="order__title">Способ оплаты</div>
                                    <div id="radioPayment">
                                        <RadioInput 
                                            onClick={e => setPayment(e)}
                                            radioId={"radioPayment"}
                                            list={[
                                                {name: "Оплата наличными во время получения(самовызов)", value: "cashShop"}
                                        ]}/>
                                        <MyHr />
                                        <RadioInput 
                                            onClick={e => setPayment(e)}
                                            radioId={"radioPayment"}
                                            list={[
                                                {name: "Оплата наличными курьеру(только, если получатель - Вы)", value: "cashCourier"}
                                        ]}/>
                                        <MyHr />
                                        <RadioInput 
                                            onClick={e => setPayment(e)}
                                            radioId={"radioPayment"}
                                            list={[
                                                {name: "Онлайн оплата - Сбербанк", value: "card"}
                                        ]}/>
                                        <MyHr />

                                    </div>
                                    
                                </MyBlock>
                            </div>
                        <div className="order__btn">
                            <MyButton size={"small"}>Оформить заказ</MyButton>
                        </div>    
                        </div>
                    </section>
                    <section className="basketMin__section">
                        <h1 className='basketMin__header'>Корзина</h1>
                        {basket.products.map(p => 
                         <BasketCard variant={"min"} key={p.product.id} p={p} />   
                        )}
                        <div className="basketMin__sum">
                            <MyBlock>
                                <div className="basketMin__block">
                                    <div className='basketMin__text'>
                                        <MySpan>Итоговая стоимость:</MySpan><div>{basket.sum} руб.</div> 
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