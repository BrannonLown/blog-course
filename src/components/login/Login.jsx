import React, { useState } from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'

function Login() {
        const [userData, setUserData] = useState({
            username: '',
            password: '',
        });
    return (
        <div>
            <Header />
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
            <Footer />
        </div>
    )
}

export default Login;