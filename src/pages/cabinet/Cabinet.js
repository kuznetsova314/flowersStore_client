import React, { useState } from 'react';
import BreadCrumbs from "../../components/UI/breadCrumbs/BreadCrumbs";
import Sidebar from '../../components/sidebar/Sidebar';
import CabinetProfile from '../../components/CabinetSections/profile/CabinetProfile';
import CabinetOrders from '../../components/CabinetSections/orders/CabinetOrders';
import CabinetChangePassword from '../../components/CabinetSections/changePassword/CabinetChangePassword';
import CabinetSignOut from '../../components/CabinetSections/CabinetSignOut';

const Cabinet = () => {
    const [variant, setVariant] = useState("profile")
    const [visible, setVisible] = useState(false);
    return (
        <main>
            <section className="cabinet" style={{display: "flex"}}>
                <Sidebar
                    setVisible={setVisible}  
                    onClick={(e) => setVariant(e)}
                    header={"Личный кабинет"}
                    variant={variant}
                    list={[
                    {name: "Профиль", value: "profile"},
                    {name: "Мои заказы", value: "orders"},
                    {name: "Смена пароля", value: "changePassword"},
                    {name: "Выйти", value: "signOut"},
                 ]}/>
                <div className='container'>
                    {variant === "profile" ? 
                        <CabinetProfile visible={visible} setVisible={setVisible}/>
                        : variant === "orders" ?
                        <CabinetOrders/>
                        : variant === "changePassword" ?
                        <CabinetChangePassword setVariant={setVariant}/>
                        :<CabinetSignOut/>
                    }
                </div>
            </section>
            
        </main>
    );
};

export default Cabinet;