import React from 'react';
import BreadCrumbs from '../../components/UI/breadCrumbs/BreadCrumbs';
import "./Basket.css";
import { SHOP_ROUTE, CABINET_ROUTE, ORDERING_ROUTE } from '../../utils/consts';
import BasketCard from '../../components/basketCard/BasketCard';
import { Link, useNavigate } from 'react-router-dom';
import MySpan from '../../components/UI/MySpan/MySpan';
import MyButton from '../../components/UI/MyButton/MyButton';
import { useBasket } from '../../hooks/useBasket';

const Basket = () => {
    const navigate = useNavigate();
    const [basket, basketSum, setChangeCount, deleteProduct] = useBasket()
    
    return (
        <main>
           <section className="basket__section">
                <div className="container">
                    
                    <BreadCrumbs list={[
                        {name: "Главная", to:SHOP_ROUTE},
                        {name: "Корзина", to: null},
                    ]} />
                    <div className="basket__inner">
                        <h1 className="basket__title">Корзина</h1>
                        {basket.map(p =>
                            <BasketCard 
                                setChangeCount={setChangeCount}
                                deleteProduct={id => deleteProduct(id)} 
                                variant={"simple"} 
                                key={p.id} 
                                p={p} 
                            />
                        )}
                        <div className="basket__block">
                            <div className="basket__promotion">Зайдиете в <Link 
                                to={CABINET_ROUTE} 
                                className="basket__link">
                                    личный кабинет
                                </Link>
                                , чтобы проверить вашу СКИДКУ!
                            </div>
                            <div className="basket__sum">
                                <MySpan>Итого: </MySpan><b className="basket__value">{basketSum} руб.</b>
                            </div>
                        </div>
                        <div className="basket__center">
                        <MyButton 
                            size={"small"} 
                            onClick={() => navigate(ORDERING_ROUTE)}
                        >
                            Оформить заказ
                        </MyButton>
                    </div>
                    </div>
                </div>
            </section> 
        </main>
    );
};

export default Basket;