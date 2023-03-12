import { useContext, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import './LogIn.css'

function Login() {
    const authCtx = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
        if(email === "adminuser" ){
            authCtx.onLogIn({userName:email,Role:"Admin"});
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
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={onLogin}>
                                    Submit
                                </button>
                            </div>
                            <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login;