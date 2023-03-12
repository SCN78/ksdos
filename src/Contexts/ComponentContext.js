import React, { useState } from "react";

const ComponentContext = React.createContext({componentId:0,changeComponent:undefined})

export function ComponetContextProvider(props){

    const [componentId,setComponentId] = useState(0);

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