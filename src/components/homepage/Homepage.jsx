import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import StandsOnline from '../../assets/StandsOnline.png'
import style from './Homepage.module.css'
import { Link } from 'react-router';
import { useAuth, useUsername } from '../authWrapper/AuthContext'

function Homepage() {
  const username = useUsername()
  const displayName = username ? username : "traveller"
  const {logout} = useAuth();
  return (
    <div>
        <Header />
        <h2 className={style.WelcomeTitle}>
        Stand Proud {displayName}, and welcome to the Stands Online Blog
        </h2>
        <p className={style.WelcomeInfo}>
        Stands Online is a small roblox community PvP game based around Jojo's Bizzarre Adventure. I have made a Blog site for players to talk and communicate about the happenings, 
        and discuss topics other wise not mentioned on classic forms. If you are looking to log in to post and view comments, press the login button below, if you are just wanting 
        to view the Blog posts, press the Blog posts button. Both options can be found in the header above if you get lost. Thanks for visiting, enjoy your stay!
        </p>
        <img src={StandsOnline} alt="Splash" className={style.image} />
        <div className={style.ButtonGroup}>
          {username ? <Link className={style.WelcomeButton} onClick={logout}>Logout</Link> : <Link to="/login" className={style.WelcomeButton}>Login</Link>}
          <Link className={style.WelcomeButton} to="/posts">Blogs</Link>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage