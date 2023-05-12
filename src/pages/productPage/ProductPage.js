import React, { useContext, useEffect, useState } from 'react';
import MyBlock from '../../components/UI/block/MyBlock';
import BreadCrumbs from '../../components/UI/breadCrumbs/BreadCrumbs';
import MyQuantity from '../../components/UI/quantity/MyQuantity';
import MyRadio from '../../components/UI/radio/MyRadio';
import { Context } from '../../index';
import { SHOP_ROUTE } from '../../utils/consts';
import "./ProductPage.css";
import MySpan from '../../components/UI/MySpan/MySpan';
import MyButton from '../../components/UI/MyButton/MyButton';
import { observer } from 'mobx-react-lite';
import AddProduct from '../../components/addProduct/AddProduct';
import { useParams } from 'react-router-dom';
import { createBasketItem, fetchOneBouquet } from '../../http/productAPI';

const ProductPage = observer(() => {
    const {user} = useContext(Context);
    const blank = {
        id: 0, 
        name: "", 
        price: [{size: "Малый", value: 1}, {size: "Средний", value: 2}, {size: "Большой", value: 3}], 
        flowers: [],
        description: [{name: 1, value: ""}, {name: 2, value: ""},], 
        pack: '', 
        color: '', 
        img: [{id: 1, src: ``}, {id: 2, src: ``}], 
        date: "", 
        rating: ""
    };
    const [bouquet, setBouquet] = useState(blank);
    const [activeImg, setActiveImg] = useState(blank.img[0]);
    const [activePrice, setActivePrice] = useState(blank.price[0].value)
    const [count, setCount] = useState(1);
    const [sum, setSum] = useState(activePrice);
    const {id} = useParams();
    useEffect (() => {
        fetchOneBouquet(id).then(data => {
        setBouquet(data);
        setActiveImg(data.img[0]);
        setActivePrice(data.price[0].value);
    })
    },[])
    useEffect(() => {
        setSum(+activePrice * +count)
    }, [activePrice, count]); 
    const addBasket = () => {
        if(!user.isAuth) {
            alert("Корзина недоступна для неавторизованных пользователей");
        } else {
            const basketPrice = bouquet.price.find(item => item.value === activePrice);
            const formData = new FormData();
            formData.append("userId", user.user.id);
            formData.append("product", JSON.stringify(bouquet));
            formData.append("price", JSON.stringify(basketPrice));
            formData.append("count", count);
            createBasketItem(formData).then(data => alert(data))
            
        }
    };
    
    return (
        <main>
            <section className="product__info">
                <div className="container">
                    <BreadCrumbs list={[
                        {name: "Главная", to:SHOP_ROUTE},
                        {name: "Карточка товара", to: null},
                    ]} />
                        <div className="pi__inner">
                        <div className="pi__photo">
                                <img src={activeImg.src} className="pi__bigImg" />
                                <div className="pi__line">
                                    {bouquet.img.map(item =>
                                        <img 
                                        src={item.src} 
                                        key={item.id} 
                                        onClick={() => setActiveImg(item)}
                                        className={item.id === activeImg.id ? "pi_img active" :"pi__img"}/>
                                    )}
                                </div>
                                
                            </div> 
                            <div className="pi__description">
                                <h2 className="pi__header">{bouquet.name}</h2>
                                <div className="pi__price" id="radio">
                                    <MyRadio 
                                        list={bouquet.price}
                                        setActivePrice={e => setActivePrice(e)}
                                    /> 
                                </div>
                                <MyBlock>
                                    <h4 className="pi__title">Состав</h4>
                                    <ul className="pi__ul">
                                        {bouquet.description.map(d =>
                                            <li className="pi__li" key={d.name}>{d.name} - {d.value}шт.</li>
                                        )}
                                    </ul>
                                </MyBlock>
                                <div className="pi__basket">
                                    <MyBlock variant={"flex"}>
                                        <MyQuantity count={count} setCount={setCount}/>  
                                    </MyBlock>
                                    <MyBlock variant={"flex"}>
                                        <div className="pi__block">
                                            <MySpan>Сумма:</MySpan>
                                            <div className="pi__sum">{sum} руб.</div>
                                        </div>
                                        <MyButton onClick={addBasket} size={"small"}>В корзину</MyButton>
                                    </MyBlock>
                                </div>
                                
                            </div>
                        </div>    

                    
                    
                </div>
            </section>
            <AddProduct />
        </main>
    );
});

export default ProductPage;