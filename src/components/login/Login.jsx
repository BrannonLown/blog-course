import React, { useState } from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import style from './Login.module.css'
import { useAuth } from '../authWrapper/AuthContext';

function Login() {
    const {login} = useAuth();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(userData);
        login(userData.username);
    }
    return (
        <div>
            <Header />
            <div className={style.LoginPage}>
                <form onSubmit={onSubmit}>
                    <h2 className={style.LoginHeader}>Login Info</h2>
                    <h3 className={style.InfoHeader}>Username</h3>
                    <input 
                        className={style.InputInfo}
                        value={userData.username} 
                        onChange={(e) => setUserData({...userData, username: e.target.value})}
                    />
                    <h3 className={style.InfoHeader}>Password</h3>
                    <input 
                        className={style.InputInfo}
                        value={userData.password} 
                        type="password"
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                    />
                    <button type="submit" className={style.LoginSubmitButton}> Login </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;