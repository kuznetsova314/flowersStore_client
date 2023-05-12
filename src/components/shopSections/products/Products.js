import React, { useContext } from 'react';
import Cards from '../cards/Cards';
import SortBar from '../sortBar/SortBar';
import "./Products.css";
import FilterBar from '../filterBar/FilterBar';
import ShowMore from '../../UI/showMore/ShowMore';

const Products = ({sorting, setSorting, products, filter, setFilter, fetchMore}) => {
    return (
        <section className="section__products">
                <div className="container">
                    <div className="products">
                        <div className="product__group">
                            <SortBar sorting={sorting} setSorting={setSorting}/>
                            <Cards products={products}/>
                            <ShowMore onClick={() => fetchMore()}>Показать еще</ShowMore>
                        </div>
                        <div className="filter__group">
                            <FilterBar filter={filter} setFilter={setFilter} sorting={sorting} setSorting={setSorting}/>
                        </div>
                        
                    </div>
                </div>
            </section>
    );
};

export default Products;