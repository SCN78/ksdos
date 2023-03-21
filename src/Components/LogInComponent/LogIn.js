import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import './LogIn.css'

function Login() {
    const unitTypes = [
        {
            unitType:"TSCG",
            centerList:[
                'TSCG - 1',
                'TSCG - 2',
                'TSCG - 3',
                'TSCG - 4',
            ]
        },
        {
            unitType:"DDO",
            centerList:[
                'District - 1',
                'District - 2',
                'District - 3',
                'District - 4',
            ]
        }
    ];
    const authCtx = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [unit, setUnit] = useState('');
    useEffect(() =>{},[unit]);
    const onLogin = (e) => {
        e.preventDefault();
        if(unit.toUpperCase() === "HOD" ){
            authCtx.onLogIn({userName:email,unit:unit,Role:"Admin",initScreen:0});
        }
        else if(unit.toUpperCase() === "TSCG" ){
            if(email.toLowerCase() === "tscuser")
            {
                authCtx.onLogIn({userName:email,unit:"TSCG",Role:"tscuser",initScreen:100});
            }
            else if(email.toLowerCase() === "tscadmin")   
            {
                authCtx.onLogIn({userName:email,unit:"TSCG",Role:"tscadmin",initScreen:100});
            }
        }
        else if(unit.toUpperCase() === "DOD" ){
            authCtx.onLogIn({userName:email,unit:unit,Role:"dodadmin",initScreen:0});
        }        
    }

    return (
        <>
            <div className="container">
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="password"                                    
                                    required
                                    className="form-control mt-1"
                                    placeholder="Enter assword"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Select Unit Type</label>
                                <select
                                    name="unit"
                                    required
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                >
                                    <option value="SU">Select Unit</option>
                                    <option value="TSCG">Technical Service Centre - General</option>
                                    <option value="TSCR">Technical Service Centre - Reeling</option>
                                    <option value="BSF">Basic Seed Farm</option>
                                    <option value="SF">Silk Farm</option>
                                    <option value="GG">Grainages</option>                                    
                                    <option value="CM">Cocoon Market</option>
                                    <option value="SE">Silk Exchange</option>
                                    <option value="STI">Sericulture Training Institute</option>
                                    <option value="DOD">District Officer</option>                                    
                                    <option value="HOD">Head Officer</option>                                    
                                </select>
                            </div>
                            { 
                                unit == "TSCG" && 
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
                            }
                            { 
                                unit == "DOD" && 
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
                            }
                            { 
                                unit == "BSF" && 
                                <div className="form-group mt-3">
                                <label>Select District</label>
                                <select
                                    name="selunit"
                                    required
                                    className="form-control mt-1"
                                    placeholder="Select"                                    
                                >
                                    <option value="SU">Kempanahalli</option>
                                    <option value="SU">Magadi</option>
                                    <option value="SU">Hebbur</option>
                                    <option value="SU">Kunigal</option> 
                                    <option value="SU">Solur</option>
                                    <option value="SU">Kudur</option>
                                    <option value="SU">Swarna-I</option>
                                    <option value="SU">CSB</option>                               

                                </select>
                            </div>
                            
                            }
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={onLogin}>
                                    Submit
                                </button>
                            </div>
                            {/* <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a>
                            </p> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login;