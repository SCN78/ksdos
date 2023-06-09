import React, { useContext, useState } from "react";
import AuthContext from "../../../Contexts/AuthContext";
import '../Register.css'
import RSForm from "./RSForm";

export default function RS() {
    const authCtx = useContext(AuthContext);
    const[tabCmpntName,setTabCmpntName] = useState(0);

    const tabComponentNames = {      
        1: RSForm
    };

    const showTab = (e) => {       
        setTabCmpntName(e.target.id);
    }
    const getComponent = () =>{

        switch(tabCmpntName)
        {
            case '1':
                var SomeComponent = tabComponentNames[tabCmpntName];
                return <SomeComponent />;                
            default: return '';
        }
    }    

    return (
        <>
        
            <div className="sidenav">
                {authCtx.loggedUser.Role === "Admin" && <button className="btn btn-success" id={1} onClick={showTab}>Add Record</button>}
                <button className="btn btn-success" id={2} onClick={showTab}>Reports</button> 
            </div>
            <div className="main">
                {getComponent()}
            </div>
            
        </>
    )

}