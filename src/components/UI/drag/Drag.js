import React from 'react';
import "./Drag.css";

const Drag = ({setFile, drag, setDrag, file}) => {
    function dragStartHandler (e) {
        e.preventDefault();
        setDrag(true);
    }
    function dragLeaveHandler (e) {
        e.preventDefault();
        setDrag(false);
    }
    function dropHandler(e) {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        setFile(files)
        setDrag(false)
    }
    return (
        <div>
            {drag 
            ? <div 
                className="drag__active"
                onDragStart={e => dragStartHandler(e)} 
                onDragLeave={e => dragLeaveHandler(e)} 
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => dropHandler(e)}
            >Отпустите файлы, чтобы загрузить их</div>
            :
            <div 
                className="drag"
                onDragStart={e => dragStartHandler(e)} 
                onDragLeave={e => dragLeaveHandler(e)} 
                onDragOver={e => dragStartHandler(e)} >
                <div className="drag__inner">
                    <div className='drag__icon'>
                        <input 
                            type="file"
                            value={file}
                            className='drag__input'
                            onChange={e => setFile(e.target.value)} 
                            required
                            id="input"/>
                            <label className="drag__label" for="input"></label>
                    </div>
                    <div className="drag__text">Загрузите изображения</div>
                </div>
                            
            </div>            
            
            }
        </div>    
        
    );
};

export default Drag;