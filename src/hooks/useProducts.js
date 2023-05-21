import React, { useMemo } from "react";



export const useSortedProducts = (products, sort) => {
    const sortedProducts = useMemo(() => {
        if(sort === "date") {
            return [...products].sort((a, b) => a[sort] - b[sort])
        } 
        else if (sort === "priceUp") {
            return [...products].sort((a, b) => a.price[0].value - b.price[0].value)
        } else if (sort === "priceDown") {
            return [...products].sort((a, b) =>  b.price[0].value - a.price[0].value)
        } else if (sort === "rating") {
            return [...products].sort((a, b) => a.rating - b.rating)
        } 
        return products;
    }, [sort, products])
    return sortedProducts;
}

export const useSortedEndFiltredProducts = (products, filter) => {
    const sortedAndFiltredProducts = useMemo(() => {
        let arr = [];
        const splt = (temp) => {
            for(let t of temp) {
                arr.push(t)
            }   
        }
            
        
        for(let i = 0; i < filter.length; i++) {
            if(filter[i] === "<2500") {
                let temp = products.filter(p => p.price[0].value < 2500)
                splt(temp)
            } else if(filter[i] === "2500__4000") {
                let temp = products.filter(p => (2500 <= p.price[0].value) && (p.price[0].value <= 4000))
                splt(temp)
            } else if(filter[i] === "4000__6000") {
                let temp = products.filter(p => (4000 <= p.price[0].value) && (p.price[0].value <= 6000))
                splt(temp)
            } else if(filter[i] === ">6000") {
                let temp = products.filter(p => p.price[0].value > 6000)
                splt(temp)
            } else if(filter[i].slice(0,2) === "p_"){
                let temp = products.filter(p => p.pack === filter[i])
                splt(temp)
            } else if(filter[i].slice(0,2) === "c_"){
                let temp = products.filter(p => p.color === filter[i])
                splt(temp)
            } else {
                let temp = products.filter(p => p.flowers.includes(filter[i]))
                splt(temp)
            }
        }
        if(arr.length > 0) {
            return arr;
        }  else {
            return products;
        } 
    }, [filter, products])
    return sortedAndFiltredProducts;
}

export const useProducts = (products, sort, query, filter) => {
    const sortedProducts = useSortedProducts(products, sort);
    const sortedAndFiltredProducts = useSortedEndFiltredProducts(sortedProducts, filter);
    const sortedAndFiltredAndSearchedProducts = useMemo(() => {
        return sortedAndFiltredProducts.filter(product => product.name.toLowerCase().includes(query.toLocaleLowerCase()))
    }, [query, sortedAndFiltredProducts])
    return sortedAndFiltredAndSearchedProducts;
}
