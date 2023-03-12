import React, { useContext, useState } from 'react';
import ComponentContext from '../../Contexts/ComponentContext';
import BSF from '../BSFComponent/BSF';
import DashBoard from '../DashBoardComponent/DashBoard';
import RS from '../RegistersComponents/RSComponent/RS';
import Unit1 from '../Unit1Component/Unit1';


function MainContent(){
    const componentCtx = useContext(ComponentContext);   
    const componentNames = {
        0: DashBoard,
        2: Unit1,
        1:BSF,
        11:RS
    }; 
    const getComponent = () =>{
        var SomeComponent = componentNames[componentCtx.componentId];
        return <SomeComponent />
    }
    const navigateToHome = () =>{
        componentCtx.changeComponent(0);
    }
    return (
        <>
            <div className="card bg-light text-dark m-b-10">
                <div className="card-body" onClick={navigateToHome}>Home</div>
                <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active">GeeksforGeeks</li>
                <li class="breadcrumb-item">HTML Tutorial</li>
                <li class="breadcrumb-item">CSS Tutorial</li>
            </ol>
        </nav>
            </div>
            <div className='maincontent'>
                {getComponent()}
            </div>
        </>
    )
}
export default MainContent;