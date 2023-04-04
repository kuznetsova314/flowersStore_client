import React from 'react';
import ProductCard from '../../UI/productCard/ProductCard';
import "./Cards.css";


const Cards = ({products}) => {
    return (
        <div className="cards">
            {products.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    );
};

export default Cards;