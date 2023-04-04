import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import "./Currency.css";
import {Context} from "../../../index";
const Currency = observer(() => {
    const {product} = useContext(Context);
    useEffect(() => {
        product.setSelectedCurrency(product.currency[0])
    }, [])
    return (
        <div className="cur__inner">
            {product.currency.map(cur =>
            <div
            className={cur.id === product.selectedCurrency.id ? 'cur__item active' : "cur__item"}
            onClick={() => product.setSelectedCurrency(cur)}
            key={cur.id}
            >
                {cur.name}
            </div>
            )

            }
        </div>
    );
});

export default Currency;