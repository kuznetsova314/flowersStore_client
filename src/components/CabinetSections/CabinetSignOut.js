import React, { useContext } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';

const CabinetSignOut = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    function signOut () {
        user.setIsAuth(false)
        user.setUser([])
        user.setIsAdmin(false)
        user.setIsWorker(false)
        user.setIsUser(false)
        localStorage.clear()
        navigate(SHOP_ROUTE)
    }
    return (
        <div style={{paddingLeft: 23 + "rem", paddingTop: 4 + "rem"}}>
            <h2 style={{marginBottom: 2 + "rem"}}>Выйти из аккаунта?</h2>
            <MyButton size={"small"}onClick={signOut}>Выйти</MyButton>
        </div>
    );
};

export default CabinetSignOut;