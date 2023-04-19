import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import TextReviews from '../../components/reviewsSections/textReviews/TextReviews';
import PhotoReviews from '../../components/reviewsSections/photoReviews/PhotoReviews';
import BreadCrumbs from '../../components/UI/breadCrumbs/BreadCrumbs';
import { SHOP_ROUTE } from '../../utils/consts';


const Reviews = () => {
    const [variant, setVariant] = useState("text")
    return (
        <main>
            <section style={{display: "flex"}}>
                <Sidebar 
                    header={"Отзывы"} 
                    onClick={(e) => setVariant(e)}
                    variant={variant}
                    list={[
                    {name: "Текстовые отчеты", value: "text"},
                    {name: "Фотоотзывы", value: "photo"},
                 ]}/>
                <div className='container'>
                    <div style={{paddingLeft: 23 + "rem", paddingTop: 4 + "rem"}}>
                        <BreadCrumbs list={[
                            {name: "Главная", to: SHOP_ROUTE},
                            {name: "Отзывы", to: null},
                        ]}/>
                        {variant === "text" ? 
                            <TextReviews/>
                            : 
                            <PhotoReviews/> 
                        }   
                    </div>
                    
                </div>
            </section>
        </main>
    );
};

export default Reviews;