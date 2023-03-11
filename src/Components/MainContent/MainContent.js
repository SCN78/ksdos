import React, { useContext, useState } from 'react';
import ComponentContext from '../../Contexts/ComponentContext';
import BSF from '../BSFComponent/BSF';
import DashBoard from '../DashBoardComponent/DashBoard';
import RS from '../RegistersComponents/RSComponent/RS';
import Unit1 from '../Unit1Component/Unit1';


function MainContent(){
    const componentCtx = useContext(ComponentContext);   
    const componentNames = {
        1: DashBoard,
        2: Unit1,
        11:BSF,
        111:RS
    }; 
    const getComponent = () =>{
        var SomeComponent = componentNames[componentCtx.componentId];
        return <SomeComponent />
    }
    const navigateToHome = () =>{
        componentCtx.changeComponent(1);
    }
    return (
        <>
            <div class="card bg-light text-dark m-b-10">
                <div class="card-body" onClick={navigateToHome}>Home</div>
            </div>
            <div className='maincontent'>
                {getComponent()}
            </div>
        </>
    )
}
export default MainContent;