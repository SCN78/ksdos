import React from "react";

export default function TSCRegister(){
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
            default:
                return '';
        }
    }
    // useEffect(() =>{},[currentTab]);

    return (
        <>
        <div className="sidenav">
            <button className="btn btn-success" id='1' onClick={showTab}>Kuluvaru Register</button>
            <button className="btn btn-success" id='2' onClick={showTab}>Mulberry Statistics</button>  
            <button className="btn btn-success" id='1' onClick={showTab}>Worm Test Register</button>
            <button className="btn btn-success" id='2' onClick={showTab}>Daily Brushing Register</button>
            <button className="btn btn-success" id='1' onClick={showTab}>Disinfectant stock Register</button>
            <button className="btn btn-success" id='1' onClick={showTab}>Smart card distribution Register</button>
            <button className="btn btn-success" id='2' onClick={showTab}>Cocoon Harvest Register</button>  
            <button className="btn btn-success" id='1' onClick={showTab}>Bivoltine Chawki Register</button>
            <button className="btn btn-success" id='2' onClick={showTab}>Cocoon Incentive Register</button>
            <button className="btn btn-success" id='1' onClick={showTab}>Atma Scheme Distribution Register</button>
            <button className="btn btn-success" id='1' onClick={showTab}>CDP New Plantation Register</button>
            <button className="btn btn-success" id='2' onClick={showTab}>RKVY Beneficiary Register</button>
            <button className="btn btn-success" id='1' onClick={showTab}>CDC Bill Register</button>
            <button className="btn btn-success" id='2' onClick={showTab}>Encashment  Register</button>
            </div>
            <div className="main">
                {getComponent()}
            </div>
        </>
    )
}