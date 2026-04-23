import React, { useState } from 'react';

function Login() {
        const [userData, setUserData] = useState({
            username: '',
            password: '',
        });
    return (
        <div className="LoginPage">
            <input 
            className="InputInfo" 
            value={userData.username} 
            onChange={(e) => setUserData({...userData, username: e.target.value})}
            />
            <input 
            className="InputInfo" 
            value={userData.password} 
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            />
        </div>
    )
}

export default Login;