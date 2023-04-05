import React, { useState } from 'react';
import BreadCrumbs from "../../components/UI/breadCrumbs/BreadCrumbs";
import './Cabinet.css';
import Sidebar from '../../components/sidebar/Sidebar';
import CabinetProfile from '../../components/CabinetSections/profile/CabinetProfile';
import CabinetOrders from '../../components/CabinetSections/orders/CabinetOrders';
import CabinetChangePassword from '../../components/CabinetSections/changePassword/CabinetChangePassword';

const Cabinet = () => {
    const [variant, setVariant] = useState("profile")
    return (
        <main>
            <section className="cabinet">
                <Sidebar  
                    onClick={(e) => setVariant(e)}
                    variant={variant}
                    list={[
                    {name: "Профиль", value: "profile"},
                    {name: "Мои заказы", value: "orders"},
                    {name: "Смена пароля", value: "changePassword"},
                 ]}/>
                <div className='container'>
                    {variant === "profile" ? 
                        <CabinetProfile/>
                        : variant === "orders" ?
                        <CabinetOrders/>
                        :<CabinetChangePassword setVariant={setVariant}/>
                    }
                </div>
            </section>
            
        </main>
    );
};

export default Cabinet;