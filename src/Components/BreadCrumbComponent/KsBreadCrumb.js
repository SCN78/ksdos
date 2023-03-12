import React, { useContext } from "react";
import ComponentContext from "../../Contexts/ComponentContext";
import './KsBreadCrumb.css'

export default function KsBreadCrumb(props) {

    const cmpntCtx = useContext(ComponentContext);
    const navigate = (e) =>{       
        props.navigateTo(e.target.id);
    }
    const getBreadCrumb = () =>
    {
        switch(parseInt(cmpntCtx.componentId))
        {
            case 1:
                return <><li><a href="#" id="0" onClick={navigate}>Home</a></li></>;
            case 11:
                    return <><li><a href="#" id="0" onClick={navigate}>Home</a></li><li><a href="#" id="1" onClick={navigate}>Rearing Sheet</a></li></>;
        }
    }

    return (
        <>
            <ul className="breadcrumb">
            {getBreadCrumb()}                               
            </ul>
        </>
    )
}