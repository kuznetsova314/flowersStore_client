import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import AddProductCard from '../addProductCard/AddProductCard';
import MySpan from '../UI/MySpan/MySpan';
import "./AddProduct.css";
import branch from "../../images/shop-img/branch_left.png";
import MyButton from '../UI/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';
import { ORDERING_ROUTE } from '../../utils/consts';


const AddProduct = observer(() => {
    const {product} = useContext(Context);
    const navigate = useNavigate();
    return (
        <section className='ap__section'>
            <img src={branch} className="br__left"/>
            <img src={branch} className="br__right"/>
            <div className="container">
                <div className="ap__inner">
                    <h2 className="ap__header"><MySpan>Дополнить</MySpan>заказ</h2>
                    <div className="ap__products">
                        {product.products.map(p => 
                           <AddProductCard key={p.id} p={p}/>
                        )}
                    </div>
                    <div className="ap__center">
                        <MyButton 
                            size={"small"} 
                            className="ap__btn"
                            onClick={() => navigate(ORDERING_ROUTE)}
                        >
                            Оформить заказ
                        </MyButton>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
});

export default AddProduct;