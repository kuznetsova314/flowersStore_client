import React, {  useContext, useState } from 'react';
import "./AddProductCard.css";
import MyButton from '../UI/MyButton/MyButton';
import MyQuantity from '../UI/quantity/MyQuantity';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { createBasketItem } from '../../http/productAPI';


const AddProductCard = observer(({p}) => {
    const {user} = useContext(Context);
    const [count, setCount] = useState(1);
    // const addBasket = () => {
    //     const basketItem = createObjBasket(p, p.price, count)
    //     basket.setProducts([...basket.products, basketItem])
    // };
    const addBasket = () => {
        if(!user.isAuth) {
            alert("Корзина недоступна для неавторизованных пользователей");
        } else {
            const formData = new FormData();
            formData.append("userId", user.user.id);
            formData.append("product", JSON.stringify(p));
            formData.append("price", JSON.stringify(p.price));
            formData.append("count", count);
            createBasketItem(formData).then(data => alert(data))
            
        }
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
});

export default AddProductCard;