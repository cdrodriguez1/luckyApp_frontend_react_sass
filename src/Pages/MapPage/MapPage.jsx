import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import mapRender from '../../assets/images/map-render.png';
import mapa2 from '../../assets/images/mapa2.png';
import './MapPage.scss';

export default function MapPage() {
    const [showSecondImage, setShowSecondImage] = useState(false);

    const handleClick = () => {
        setShowSecondImage(true);
    };

    return (
        <div className='b__map'>
            <div className='search__map'>
                <input placeholder='¿Qué estas buscando?' />
            </div>
            <div className='img__map'>
                <img src={showSecondImage ? mapa2 : mapRender} alt='Map' onClick={handleClick} />
            </div>
            <div>
                <NavBar />
            </div>
        </div>
    );
}
