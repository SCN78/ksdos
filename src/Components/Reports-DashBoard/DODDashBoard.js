import React, { useContext, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";

export default function DODDashBoard() {
    const authCtx = useContext(AuthContext);
    const [currentTab, changeCurentTab] = useState(0);
    const [unit, setUnit] = useState('');

    
    
    return (
        <>
            <div className="sidenav">
                <div className="form-group mt-3">
                    <label>Select TSC</label>
                    <select
                        name="selunit"
                        required
                        className="form-control mt-1"
                        placeholder="Select TSC"
                        style={{backgroundColor:"green",color:"white"}}
                    >
                        <option value="SU">TSC - 1</option>
                        <option value="SU">TSC - 2</option>
                        <option value="SU">TSC - 3</option>
                        <option value="SU">TSC - 4</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <label>Reports</label>
                    <select
                        name="selunit"
                        required
                        className="form-control mt-1"
                        placeholder="Select TSC"
                        style={{backgroundColor:"green",color:"white"}}
                    >
                        <option value="SU">TSC1 - Form</option>
                        <option value="SU">TSC2 - Form</option>
                        <option value="SU">TSC3 - Form</option>
                        <option value="SU">TSC4 - Form</option>
                        <option value="SU">TSC5 - Form</option>
                        <option value="SU">TSC6 - Form</option>
                    </select>
                </div>
            </div>
            <div className="main">
                {}
            </div>
        </>
    )
}