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
            </div>
            <div className="main">
                {getComponent()}
            </div>
        </>
    )
}