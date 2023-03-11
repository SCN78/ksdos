import { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import './NavBar.css'
import NavElement from './NavElement';

function NavBar(){
    const authCtx = useContext(AuthContext);
       
    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">   
                    <div className="logo-txt">
                        <img src={"https://sericulture.karnataka.gov.in/frontend/opt1/images/center_logo/kar_main_logo.png"}
                            alt="ರೇಷ್ಮೆ ಇಲಾಖೆ"
                            title="ರೇಷ್ಮೆ ಇಲಾಖೆ"
                            className="img-logo" />
                        <span>
                            <h3>Department Of Sericulture</h3>
                            <h4>Governament Of Karnataka</h4>
                        </span>
                    </div>
                    <div>
                        {authCtx.loggedUser && <NavElement />}
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default NavBar;