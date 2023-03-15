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
             <div className="card bg-light text-dark" style={{textAlign:"center"}}>
                <button className="btn btn-success" onClick={navigateToHome}>Home</button>                
            </div>
            {authCtx.loggedUser.unit === "HOD" && <HODDasBoard />}
            {authCtx.loggedUser.unit === "DOD" && <DODDashBoard />}
        </>
    )
}