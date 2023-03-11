import React, { useState } from 'react'


let AuthContext = React.createContext(
    {
        loggedUser:null,
        onLogIn:undefined,
        onLogOut:undefined,
        isEnglish:true,
        changeLang:undefined
    });

export function AuthContextProvider(props){

    const[loggedUser,setLoggedUser] = useState(null);
    const[isEnglish,setUseEnglish] = useState(true);
    const loginHandler = (user) =>
    {
        setLoggedUser(user);
    }
    const logOutHandler = () =>{
        setLoggedUser(null);
    }
    const onChangeLang = () =>{
        setUseEnglish(!isEnglish);
    }
    return (
        <AuthContext.Provider value={{loggedUser:loggedUser,onLogIn:loginHandler,onLogOut:logOutHandler, isEnglish:isEnglish,changeLang:onChangeLang}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;