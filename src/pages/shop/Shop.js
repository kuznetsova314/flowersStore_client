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
import { fetchBouquets } from '../../http/productAPI';

const Shop = observer(() => {
    const {product} = useContext(Context);
    const [products, setProducts] = useState([])
    const [sorting, setSorting] = useState({sort: '', query: ''});
    const [filter, setFilter] = useState([]);
    const [page, setPage] = useState(1);
    const sortedAndSearchedProducts = useProducts(products, sorting.sort, sorting.query, filter)
    useEffect(() => {
        fetchBouquets(page).then(data => {
            setProducts(data);
        })
    }, [])
    useEffect(() => {
        fetchBouquets(page).then(data => {
            setProducts([...products, ...data])
        })
    }, [page])
    function fetchMore() {
        setPage(prev => ++prev);
    }
    
    return (
        <main className={classes.shop}>
            <Intro />
            <Advantage />
            <Products 
                products={sortedAndSearchedProducts} 
                filter={filter} 
                setFilter={setFilter} 
                sorting={sorting} 
                setSorting={setSorting}
                fetchMore={() => fetchMore()}
            />
            <Steps/>
            <ShopReviews/>
            <Description />
        </main>
    );
});

export default Shop;