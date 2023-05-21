import React, { useEffect, useState } from 'react';
import MyBlock from '../UI/block/MyBlock';
import MyQuantity from '../UI/quantity/MyQuantity';
import "./BasketCard.css";
import MyHr from '../UI/hr/MyHr';
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import { changeBasketItem } from '../../http/productAPI';

const BasketCard = ({variant, p, setChangeCount, deleteProduct}) => {
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
        try {
            let product = addCount();
            changeBasketItem(product).then(data => {
                p = data
            })
            setBasketItemSum(itemSum);  
            setChangeCount(prev => !prev)  
        } catch(e) {
            console.log(e)
        }
        
    }, [count])
    
    return (
        <div className="basket__card">
            {variant === "min" ? 
                <MyBlock variant={"small"}>
                    <div className="basket__info">
                        <RxCross1 className="basketMin__icon" onClick={() => deleteProduct(p.id)}/>
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
                            <AiOutlineDelete 
                                className="basket__icon" 
                                size={"25px"} 
                                onClick={() => deleteProduct(p.id)}
                            />
                            
                        </div>
                        
                    </div>
                </MyBlock>
            }
            
        </div>
    );
};

export default BasketCard;