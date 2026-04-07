import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import StandsOnline from '../../assets/StandsOnline.png'
import style from './Homepage.module.css'

function Homepage() {
  return (
    <div>
        <Header />
        <img src={StandsOnline} alt="Splash" className={style.image} />
        <Footer />
    </div>
  )
}

export default Homepage