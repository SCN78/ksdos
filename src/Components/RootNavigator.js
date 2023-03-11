import React, { useContext } from 'react'
import AuthContext from '../Contexts/AuthContext';
import DashBoard from './DashBoardComponent/DashBoard';
import Login from './LogInComponent/LogIn';
import NavBar from './NavBarComponent/NavBar'
import Root from './RootComponent/Root';

function RootNavigator(){

    const authCtx = useContext(AuthContext);

    return(
        <>
            <NavBar />
            {!authCtx.loggedUser && <Login />}
            {authCtx.loggedUser && <Root />}
        </>
    )
}
export default RootNavigator;