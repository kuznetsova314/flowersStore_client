import React from 'react';
import "./SortBar.css";

const SortBar = ({sorting, setSorting}) => {
    const options = [
            {value: "date", name: "Новизне"},
            {value: "priceUp", name: "Цена по возростанию"},
            {value: "priceDown", name: "Цена по убыванию"},
            {value: "rating", name: "Популярности"},
    ];
    return (
        <div className="sortBar">
            <div className="sort__title">Сортировать по:</div>
            {options.map(opt => 
                <div 
                    value={opt.value}
                    key={opt.value} 
                    className={opt.value === sorting.sort ? "sort__item active" : "sort__item"}
                    onClick={e => setSorting({...sorting, sort: e.target.getAttribute("value")})}
                >
                    {opt.name}
                </div>
            )}
        </div>
    );
};
// 
export default SortBar;