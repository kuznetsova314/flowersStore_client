import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../../../index';
import MyHr from '../../UI/hr/MyHr';
import MyFilter from '../../UI/myFilter/MyFilter';
import MyInput from '../../UI/myInput/MyInput';
import MyBlock from '../../UI/block/MyBlock';
import ShowMore from '../../UI/showMore/ShowMore';

const FilterBar = observer(({filter, setFilter, sorting, setSorting}) => {
    const {product} = useContext(Context);
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <MyBlock variant={"small"}>
                <MyInput 
                    type="search"
                    value={sorting.query}
                    onChange={e => setSorting({...sorting, query: e.target.value})}
                    placeholder="Поиск..."
                />
                <MyHr />
                <MyFilter 
                title={"Стоимость"} 
                arr={[
                    {value: "<2500", name: "до 2500 руб."},
                    {value: "2500__4000", name: "2500 - 4000 руб."},
                    {value: "4000__6000", name: "4000 - 6000 руб."},
                    {value: ">6000", name: "от 6000 руб."},
                ]} 
                filter={filter} 
                setFilter={setFilter} />
                <MyHr />
                <MyFilter 
                className={showMore ? "filter__scroll" : "filter__inner"}
                title={"Букет с ..."} 
                arr={product.flowers} 
                filter={filter} 
                setFilter={setFilter} />
                <ShowMore onClick={() => setShowMore((prev => !prev))} className={"showMore__gray"}>
                    {showMore ? "Скрыть" : "Показать еще"}
                </ShowMore>
                <MyHr />
                <MyFilter 
                title={"Цветы упакованы"} 
                arr={product.pack} 
                filter={filter} 
                setFilter={setFilter} />
                <MyHr />
                <MyFilter 
                title={"Цветовая гамма"} 
                arr={product.color} 
                filter={filter} 
                setFilter={setFilter} />
            </MyBlock>
            
        </div>
    );
});

export default FilterBar;