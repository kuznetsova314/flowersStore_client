import React, { useContext, useState } from 'react';
import "./AddProductCard.css";
import MyButton from '../UI/MyButton/MyButton';
import MyQuantity from '../UI/quantity/MyQuantity';
import { Context } from '../../index';
import { createObjBasket } from '../../utils/createObjBasket';

const AddProductCard = ({p}) => {
    const {basket} = useContext(Context);
    const [count, setCount] = useState(1);
    const addBasket = () => {
        const basketItem = createObjBasket(p, p.price, count)
        basket.setProducts([...basket.products, basketItem])
    };
    return (
        <div className="ap__card" key={p.id}>
            <div className="ap__img">
                <img src={p.img[0].src} className="ap__img"/>
            </div>
            
            <div className="ap__description">
                <h4 className="ap__title">{p.name}</h4>
                <div className="ap__price"><b>{p.price}</b> руб.</div>
                <MyQuantity count={count} setCount={setCount}/>
                <MyButton size={"small"} value={p.id} onClick={addBasket}>+ Добавить</MyButton>
            </div>
        </div> 
    );
};

export default AddProductCard;