import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import ComponentContext from '../../Contexts/ComponentContext';
import KsBreadCrumb from '../BreadCrumbComponent/KsBreadCrumb';
import BSF from '../BSFComponent/BSF';
import DashBoard from '../DashBoardComponent/DashBoard';
import RS from '../RegistersComponents/RSComponent/RS';
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
        100:TSCG
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
            {parseInt(componentCtx.componentId) > 0 &&
            <div className="card bg-light text-dark m-b-10">
                <KsBreadCrumb navigateTo = {navigateToHome}/>   
            </div>}
            <div className='maincontent'>
                {getComponent()}
            </div>
        </>
    )
}
export default MainContent;