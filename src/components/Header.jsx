import React from 'react'
import '../components/css/Header.css'
import logo from '../components/img/1.png'
import image from '../components/img/2.png'

const Header = () => {
  return (
    <div>
      <header>
        <div className="main-head">

            <div className="directot-img">
            <img src={logo} alt="logo" className="Belek-img"/>
            </div>
            <div className="logo-img">
               <img src={image} alt="image" className="logo"/>
            </div>
            <div className="nav">
                <ul className="main-nav">
                    <a href="#" className="link"><li className='home-li'>Главная</li></a>
                    <a href="#courses" className="link"><li class="about-li">Курсы</li></a>
                    <a href="#teachers" class="link"><li className="teachers-li">Преподавательский состав</li></a>
                </ul>
            </div>
          </div>
    </header>

    
    
    </div>
  )
}

export default Header;
