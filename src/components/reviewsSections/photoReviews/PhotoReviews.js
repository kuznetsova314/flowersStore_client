import React, { useContext, useEffect, useState } from 'react';
import "./PhotoReviews.css";
import {Context} from "../../../index";
import { observer } from 'mobx-react-lite';
import { BsArrowRight } from "react-icons/bs";
import MyModal from '../../UI/modal/MyModal';
import MyButton from '../../UI/MyButton/MyButton';
import { CgArrowDownO } from "react-icons/cg";
import Drag from '../../UI/drag/Drag';

const PhotoReviews = observer(() => {
    const {review} = useContext(Context);
    const [visible, setVisible] = useState(false);
    const [reviewId, setReviewId] = useState('');
    const [file, setFile] = useState([]);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [drag, setDrag] = useState(false);
    const handlerReview = (e) => {
        setReviewId(e.target.getAttribute("value"));
        setVisible(true);
    }
    const visibleReview = review.reviewsPhoto.find(item => item.id === +reviewId);
    
    return (
        <div className="photoReviews">
            <MyModal 
                visible={visible}
                setVisible={setVisible}
            >
                {visible && 
                    <div className="pr__modal">
                        <div className="pr__greenText">{visibleReview.name}</div>
                        <img src={visibleReview.img} className="pr__bigImg"/>
                        <div className="pr__text">{visibleReview.body}</div>
                    </div>
                }
            </MyModal>
            {review.reviewsPhoto.slice(0, 10).map(r =>
                <div key={r.id} className="pr__item">
                    <div className="pr__block">
                        <div className="pr__img">
                            <img src={r.img}/>
                        </div>
                        <div className="pr__box">
                            <div className="pr__greenText">{r.name}</div>
                            <div className="pr__text">{r.body}</div>
                            <div 
                                className='pr__right'
                                value={r.id}
                                onClick={e => handlerReview(e)}>
                                <div 
                                    className="pr__greenText"
                                    value={r.id}
                                    onClick={e => handlerReview(e)}>
                                        Читать больше
                                </div>
                                <BsArrowRight 
                                    color={"#6AAE55"}
                                    value={r.id}
                                    onClick={e => handlerReview(e)} 
                                    size={"20px"}/>
                            </div>
                        </div>    
                    </div>
                    
                </div>
            )}
            <div className="pr__whiteArea">
                <div className="pr__flex">
                    <div className="pr__drag">
                        <Drag file={file} setFile={setFile} drag={drag} setDrag={setDrag}/>
                    </div>
                    
                    <div className="pr__inputs">
                        <div className="pr__flex">
                            <div className="pr__column">
                                <div className="pr__name">Имя и фамилия</div>
                                <input 
                                    type="text"
                                    placeholder="Валерий Меладзе"
                                    required
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)} 
                                    className="pr__input"/>
                            </div>
                            <div className="pr__column">
                                <div className="pr__name">Эл. почта</div>
                                <input 
                                    type="text"
                                    required
                                    placeholder="example@mail.ru"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} 
                                    className="pr__input"/>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            required
                            placeholder="Ваш комментарий"
                            className="pr__textInput" 
                            value={comment}
                            onChange={e => setComment(e.target.value)} />
                    </div>
                    
                </div>
                <div className="pr__right">
                    <MyButton size={"small"}>Отправить</MyButton>
                </div>    
            </div>
                
            
        </div>
    );
});

export default PhotoReviews;