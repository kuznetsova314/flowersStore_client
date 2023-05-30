import React from 'react';
import { isAuth, userId } from '../utils/consts';
import { createBasketItem } from '../http/productAPI';


export const useAddBasket = () => {
    const addBasket = (bouquet, count, activePrice) => {
        if(isAuth()) {
            const basketPrice = bouquet.price.find(item => item.value === activePrice);
            const formData = new FormData();
            formData.append("userId", userId());
            formData.append("product", JSON.stringify(bouquet));
            formData.append("price", JSON.stringify(basketPrice));
            formData.append("count", count);
            for (let [key, value] of formData) {
                console.log(`${key} - ${value}`)
            }
            
            createBasketItem(formData).then(data => alert(data))
            
        } else {
            alert("Корзина недоступна для неавторизованных пользователей");
        }
    };
    return {addBasket};
};

