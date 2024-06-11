import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'

export default function NavBar() {


    const { t, i18n } = useTranslation();
    const traducir = (leng) => {
        i18n.changeLanguage(leng);
    };
    traducir();


    return (
        <header>
            <nav className='nav__bar'>
                <NavLink to='/home'><img src='src/assets/images/icon-home.png' /></NavLink>
                <NavLink to='/map'><img src='src/assets/images/icon-map.png' /></NavLink>
                <NavLink to='/gallery'><img src='src/assets/images/icon-gallery.png' /></NavLink>
                <NavLink to='/profile'><img src='src/assets/images/icon-profile.svg' /></NavLink>
                <NavLink to='/masprofile'><img src='src/assets/images/icon-toend.png' /></NavLink>


                {/* <NavLink to='/profile'><img src='src/assets/images/icon-toend.svg' className={activeIndex === index ? 'active' : ''} /></NavLink> */}





            </nav>
        </header>
    )
}
