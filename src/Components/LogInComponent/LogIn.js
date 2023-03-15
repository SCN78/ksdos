import { useContext, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import './LogIn.css'

function Login() {
    const authCtx = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [unit, setUnit] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
        if(unit.toUpperCase() === "HOD" ){
            authCtx.onLogIn({userName:email,Role:"Admin",initScreen:0});
        }
        else if(unit.toUpperCase() === "TSCG" ){
            if(email.toLowerCase() === "tscuser")
            {
                authCtx.onLogIn({userName:email,Role:"tscuser",initScreen:100});
            }
            else if(email.toLowerCase() === "tscadmin")   
            {
                authCtx.onLogIn({userName:email,Role:"tscadmin",initScreen:100});
            }
        }
        else{
            authCtx.onLogIn({userName:email,Role:"User"});
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
                                    <option value="BSFK">Basic Seed Farm- Kunigal</option>
                                    <option value="SF">Silk Farm</option>
                                    <option value="GG">Grainages</option>                                    
                                    <option value="CM">Cocoon Market</option>
                                    <option value="SE">Silk Exchange</option>
                                    <option value="STI">Sericulture Training Institute</option>
                                    <option value="DOD">District Officer</option>                                    
                                    <option value="HOD">Head Officer</option>                                    
                                </select>
                            </div>
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