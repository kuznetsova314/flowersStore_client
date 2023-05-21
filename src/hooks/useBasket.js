import React, { useEffect, useState } from "react";
import { deleteBasketItem, fetchBasket } from "../http/productAPI";
import { userId } from "../utils/consts";
import { calcSum } from "../utils/calcSum";

export function useBasket (id) {
    const [basket, setBasket] = useState([]);
    const [basketSum, setBasketSum] = useState(0);
    const [changeCount, setChangeCount] = useState(0);
    
    useEffect (() => {
        try {
            fetchBasket(userId()).then(data => setBasket(data))
        } catch(e) {
            console.log(e)
        }
    }, [])
    useEffect(() => {
        setBasketSum(calcSum(basket));
    }, [changeCount])
    function deleteProduct (id) {
        try {
            deleteBasketItem({basketId: id, userId: userId()}).then(data => {
                setBasket(data);
                setChangeCount(prev => prev = !prev)
            })    
        } catch(e) {
            console.log(e)
        }
        
    }
    return [basket, basketSum, setChangeCount, deleteProduct]
}