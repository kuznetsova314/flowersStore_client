import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../utils/consts';
import MyButton from '../MyButton/MyButton';
import MyTag from '../tag/MyTag';
import classes from "./ProductCard.module.css";
import { useAddBasket } from '../../../hooks/useAddBasket';

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const {addBasket} = useAddBasket();
    const count = 1;
    return (
        <div >
            <div className={classes.card}>
                {(product.tag) ?
                    <MyTag tag={product.tag}>{product.tag}</MyTag>
                    : ""
                }
                <img 
                    className={classes.card__img} 
                    src={product.img[0].src} 
                    onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
                />
                <div className={classes.card__inner}>
                    <h4 
                        className={classes.card__title} 
                        onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
                    >
                        {product.name}
                    </h4>
                    <div className={classes.card__group}>
                        <div className={classes.card__text}>Стоимость:</div>
                        <div className={classes.card__price}>{product.price[0].value}</div>
                    </div>
                    <MyButton size={"small"} onClick={() => addBasket(product, count, product.price[0].value)}>В корзину</MyButton>
                </div>
                
            </div>
        </div>
    );
};

export default ProductCard;