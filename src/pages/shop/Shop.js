import React, { useContext, useEffect, useState } from 'react';
import classes from "./Shop.module.css";
import Intro from '../../components/shopSections/intro/Intro';
import Advantage from '../../components/shopSections/advantage/Advantage';
import Products from '../../components/shopSections/products/Products';
import {useProducts} from "../../hooks/useProducts";
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import Steps from '../../components/shopSections/steps/Steps';
import ShopReviews from '../../components/shopSections/shopReviews/ShopReviews';
import Description from '../../components/shopSections/description/Description';

const Shop = observer(() => {
    const {product} = useContext(Context);
    const [products, setProducts] = useState([])
    const [sorting, setSorting] = useState({sort: '', query: ''});
    const [filter, setFilter] = useState([]);
    const sortedAndSearchedProducts = useProducts(products, sorting.sort, sorting.query, filter)
    useEffect(() => {
        setProducts([...product.bouquets])
    }, [])
    
    return (
        <main className={classes.shop}>
            <Intro />
            <Advantage />
            <Products products={sortedAndSearchedProducts} filter={filter} setFilter={setFilter} sorting={sorting} setSorting={setSorting}/>
            <Steps/>
            <ShopReviews/>
            <Description />
        </main>
    );
});

export default Shop;