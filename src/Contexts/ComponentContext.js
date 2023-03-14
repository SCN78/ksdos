import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const ComponentContext = React.createContext({componentId:0,changeComponent:undefined})

export function ComponetContextProvider(props){

    const authCtx = useContext(AuthContext);
    const [componentId,setComponentId] = useState(authCtx.loggedUser.initScreen);

    const onChangeComponent = (id) =>{
        setComponentId(id);
    }    

    return(
        <ComponentContext.Provider value = {{componentId:componentId,changeComponent:onChangeComponent}}>
            {props.children}
        </ComponentContext.Provider>
    )
}

export default ComponentContext;