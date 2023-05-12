import React, { useContext } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import { Context } from '../../index';

const CabinetSignOut = () => {
    const {user} = useContext(Context);
    function signOut () {
        user.setIsAuth(false)
        user.setUser([])
        user.setIsAdmin(false)
        user.setIsWorker(false)
        user.setIsUser(false)
        localStorage.clear()
    }
    return (
        <div style={{paddingLeft: 23 + "rem", paddingTop: 4 + "rem"}}>
            <h2 style={{marginBottom: 2 + "rem"}}>Выйти из аккаунта?</h2>
            <MyButton size={"small"}onClick={signOut}>Выйти</MyButton>
        </div>
    );
};

export default CabinetSignOut;