import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import ComponentContext from '../../Contexts/ComponentContext';
import KsBreadCrumb from '../BreadCrumbComponent/KsBreadCrumb';
import BSF from '../BSFComponent/BSF';
import DashBoard from '../DashBoardComponent/DashBoard';
import RS from '../RegistersComponents/RSComponent/RS';
import RDashBoard from '../Reports-DashBoard/RDashBoard';
import TSCG from '../TSCComponent/TSCG';
import Unit1 from '../Unit1Component/Unit1';


function MainContent(){
    const componentCtx = useContext(ComponentContext); 
    const authCtx = useContext(AuthContext);    
      
    const componentNames = {
        0: DashBoard,
        2: Unit1,
        1:BSF,
        11:RS,
        100:TSCG,
        1000:RDashBoard
    };     
    const getComponent = () =>{
        var SomeComponent = componentNames[componentCtx.componentId];
        return <SomeComponent />
    }
    const navigateToHome = (id) =>{
        componentCtx.changeComponent(id);
    }
   
    return (
        <>
           <div className="card bg-light text-dark" style={{textAlign:"center"}}>
                {authCtx.loggedUser.unit === "TSCG" && <p>Technology Service Center - 1</p>} 
                {authCtx.loggedUser.unit === "DOD" && <p>District - 1</p>}                  
            </div>
            <div className='maincontent'>                
                {getComponent()}
            </div>
        </>
    )
}
export default MainContent;