import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useState } from 'react';

function Homepage(){
const [loggedIn, setloggedIn] = useState(false); //manages loggedIn state

  const login = () => setloggedIn(true); //functions, used to set loggedIn to true or false
  const logout = () => setloggedIn(false);
    return(
        <div>
        <h1>Welcome to my React App</h1>
            {loggedIn ? (
                <div>
                    <LogoutButton logout={logout} />
                </div>
            ) : (
                <LoginButton login={login} />
            )}
        </div>
    )
}

export default Homepage;