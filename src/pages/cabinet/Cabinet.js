import React, { useState } from 'react';
import './Cabinet.css';
import Sidebar from '../../components/sidebar/Sidebar';

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
                    
                    {variant === "first" ? 
                        <div className="cabinet__profile">first</div>
                        : variant === "second" ?
                        <div className="cabinet__profile">second</div>
                        :<div className="cabinet__profile">third</div>
                    }
                </div>
            </section>
            
        </main>
    );
};

export default Cabinet;