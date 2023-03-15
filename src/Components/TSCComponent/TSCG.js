import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import ComponentContext from "../../Contexts/ComponentContext";
import '../TabComponent/VTab.css';
import AddFarmer from "./AddFarmer";
import FarmerList from "./FarmerList";

export default function TSCG(){
    const authCtx = useContext(AuthContext);
    const cmntCtx = useContext(ComponentContext);
    const [currentTab,changeCurentTab] = useState(0);

    const showTab = (e) =>{   
        changeCurentTab(parseInt(e.target.id));        
    }
    const getComponent = () =>{
        switch(currentTab)
        {
            case 1:
                return <AddFarmer />;
            case 2:
                return <FarmerList userRole={authCtx.loggedUser.Role}/>;
            default:
                return '';
        }
    }
    // useEffect(() =>{},[currentTab]);

    return (
        <>
        <div className="sidenav">
            { authCtx.loggedUser.Role === "tscuser" && <button className="btn btn-success" id='1' onClick={showTab}>Register Farmer</button> }
            <button className="btn btn-success" id='2' onClick={showTab}>Framers List</button>                
            </div>
            <div className="main">
                {getComponent()}
            </div>
        </>
    )
}