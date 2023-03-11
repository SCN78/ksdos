import React from "react";
import { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';


export default function NavElement(){
    const authCtx = useContext(AuthContext);
    const onLogOut = () =>{
        authCtx.onLogOut(null);
    }
    const onChangeLanguage = () => {
        authCtx.changeLang();
    }

    return(
        <>
            {authCtx.isEnglish && <button className="btn-bd-logout" onClick={onChangeLanguage}>ಕನ್ನಡ</button>}
            {!authCtx.isEnglish && <button className="btn-bd-logout" onClick={onChangeLanguage}>English</button>}
            <button className="btn-bd-logout" style={{marginLeft:10}} onClick={onLogOut}>Log Out</button>
        </>
    )
}