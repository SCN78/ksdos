import React, { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";

export default function HODDasBoard(){
    const authCtx = useContext(AuthContext);

    return (
        <>
            <div className="sidenav">
                <div className="form-group mt-3">
                    <label>Select District</label>
                    <select
                        name="selunit"
                        required
                        className="form-control mt-1"
                        placeholder="Select Distrct"
                    >
                        <option value="SU">Distrct - 1</option>
                        <option value="SU">Distrct - 2</option>
                        <option value="SU">Distrct - 3</option>
                        <option value="SU">Distrct - 4</option>

                    </select>
                </div>
                <div className="form-group mt-3">
                    <label>Select TSC</label>
                    <select
                        name="selunit"
                        required
                        className="form-control mt-1"
                        placeholder="Select TSC"
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
                { }
            </div>
        </>
    )
}