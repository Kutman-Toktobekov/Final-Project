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
                    <a href="" className="link"><li>Главная</li></a>
                    <a href="" className="link"><li class="about-li">О нас</li></a>
                    <a href="" className="link"><li>Курсы</li></a>
                    <a href="" class="link"><li className="teachers-li">Преподавательский состав</li></a>
                </ul>
            </div>
        </div>
    </header>

    
    
    </div>
  )
}

export default Header;
