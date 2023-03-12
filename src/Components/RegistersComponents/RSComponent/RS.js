import React, { useState } from "react";
import '../Register.css'
import RSForm from "./RSForm";

export default function RS() {
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
                <button className="btn btn-success" id={1} onClick={showTab}>Add Record</button>
                <button className="btn btn-success" id={2} onClick={showTab}>Add Record</button>
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div className="main">
                {getComponent()}
            </div>
            
        </>
    )

}