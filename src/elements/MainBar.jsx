import "./MainBar.css";
import { useState } from 'react';
import Login from './Login'
import LoginBtn from './LoginBtn';
function MainBar() {
    
    const [loginShown, setLoginShown] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    function loginalt() {
        setLoginShown(!loginShown);
    }
    return (
        <>
        <header>
            <div id="title">
                Red Social
            </div>
            {loggedIn ? '' : <LoginBtn pushed={ loginalt } />}
        </header>
        {loginShown ? <Login /> : ''}
        
        </>
    );
}


export default MainBar;