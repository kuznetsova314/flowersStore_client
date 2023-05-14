import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Context } from '../..';
import MyBlock from '../UI/block/MyBlock';
import MyButton from '../UI/MyButton/MyButton';
import MyQuantity from '../UI/quantity/MyQuantity';
import "./BasketCard.css";
import MyHr from '../UI/hr/MyHr';
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import { changeBasketItem } from '../../http/productAPI';

const BasketCard = observer(({variant, p}) => {
    const {basket} = useContext(Context);
    const [count, setCount] = useState(p.count);
    const [basketItemSum, setBasketItemSum] = useState(itemSum);
    function itemSum () {
        return +count * +p.price.value;
    }
    
    function addCount () {
        let product = Object.assign(p)
        product.count = count
        return product;
    }
   
    useEffect(() => {
        let product = addCount();
        changeBasketItem(product).then(data => p = data)

        setBasketItemSum(itemSum);
    }, [count])
    const deleteProduct = () => {
        // basket.setProducts(basket.products.filter(item => item.product.id !== p.product.id))
        // console.log(JSON.stringify(basket.products))
    }
    return (
        <div className="basket__card">
            {variant === "min" ? 
                <MyBlock variant={"small"}>
                    <div className="basket__info">
                        <RxCross1 className="basketMin__icon" onClick={() => deleteProduct()}/>
                        <div className='basketMin__img'>
                            <img src={p.product.img[0].src}/>
                        </div>
                        <div className="basket__description">
                            <h4 className="basket__name"><b>{p.product.name}</b></h4>
                            <div className='basket__price'>{p.price.size}({p.price.value} руб.)</div>
                        </div>
                    </div>
                    <MyHr />
                    <div className="basket__info">
                        <MyQuantity count={count} setCount={setCount} />
                        <div className="basketItem__sum"><span className="basket__span">Сумма:</span>
                        <b>{basketItemSum} руб.</b></div>
                    </div>
                </MyBlock>
                :
                <MyBlock variant={"flex"}>
                    <div className="basket__img">
                        <img src={p.product.img[0].src}/>
                    </div>
                    
                    <div className="basket__description">
                        <h4 className="basket__name"><b>{p.product.name}</b></h4>
                        <div className="basket__info">
                            <div className='basket__price'>{p.price.size}({p.price.value} руб.)</div>
                            <MyQuantity count={count} setCount={setCount} />
                            <div className="basketItem__sum">Сумма <b>{basketItemSum}</b></div>
                            <AiOutlineDelete className="basket__icon" size={"25px"} onClick={() => deleteProduct()}/>
                            
                        </div>
                        
                    </div>
                </MyBlock>
            }
            
        </div>
    );
});

export default BasketCard;