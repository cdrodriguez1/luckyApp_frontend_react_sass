import React, { useState } from 'react';
import './CarouselGalleryMyPets.scss';
import { Link } from 'react-router-dom';

export default function CarouselGalleryMyPets() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselGallery = [
        {
            "src": "src/assets/images/icon-apolo.png",
            "alt": "icon-apolo"
        },
        {
            "src": "src/assets/images/icon-kiko.png",
            "alt": "icon-kiko"
        },
        {
            "src": "src/assets/images/icon-dali.png",
            "alt": "icon-dali"
        }
    ];

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="b__carousel__home">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {carouselGallery.map((slide, index) => (
                    <div className="carousel1__home" key={index}>
                        <Link className="link_carousel" to="#">
                            <img src={slide.src} alt={slide.alt} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="indicators">
                {carouselGallery.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

