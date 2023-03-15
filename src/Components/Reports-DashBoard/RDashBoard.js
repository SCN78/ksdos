import React, { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import ComponentContext from "../../Contexts/ComponentContext";
import KsBreadCrumb from "../BreadCrumbComponent/KsBreadCrumb";
import DODDashBoard from "./DODDashBoard";
import HODDasBoard from "./HODDashBoard";

export default function RDashBoard(){
    const authCtx = useContext(AuthContext);
    const cmpntCtx = useContext(ComponentContext);

    const navigateToHome = () =>{
        cmpntCtx.changeComponent(0);
    }

    return(
        <>     
            <button className="btn btn-success">Home</button>      
            {authCtx.loggedUser.unit === "HOD" && <HODDasBoard />}
            {authCtx.loggedUser.unit === "DOD" && <DODDashBoard />}
        </>
    )
}