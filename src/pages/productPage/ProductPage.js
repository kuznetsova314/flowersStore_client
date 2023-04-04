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
import { createObjBasket } from '../../utils/createObjBasket';



const ProductPage = observer(() => {
    const {basket} = useContext(Context);
    const bouquet = {
        id: 1, 
        name: "Букет из разноцветных ромашек роз пионов и лилий", 
        price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], 
        isFlowers: true, 
        flowers: ["roses", "tulips"],
        description: [{name: "Гербера оранжевая", value: 11}, {name: "Гвоздика однобутонная розовая", value: 7}, {name: "Хризантема кустовая Филин Грин", value: 5}, {name: "Роза Шангри Ла", value: 29}, {name: "Роза Пенни Лейн", value: 29}], 
        pack: 'p_box', 
        color: 'c_white', 
        img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`}, {id: 3, src: `https://via.placeholder.com/150/771796`}, {id: 4, src: `https://via.placeholder.com/150/771796`}], 
        date: 1676847878, 
        rating: 1
    };
    const [activeImg, setActiveImg] = useState(bouquet.img[0]);
    const [activePrice, setActivePrice] = useState(bouquet.price[0].value)
    const [count, setCount] = useState(1);
    const [sum, setSum] = useState(activePrice);
    useEffect(() => {
        setSum(+activePrice * +count)
    }, [activePrice, count]); 
    const addBasket = () => {
        const basketPrice = bouquet.price.find(item => item.value === activePrice);
        const basketItem = createObjBasket(bouquet, basketPrice, count)
        basket.setProducts([...basket.products, basketItem])
        const json = JSON.stringify(basket.products)
        console.log(json)
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