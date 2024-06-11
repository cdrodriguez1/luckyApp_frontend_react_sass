// src/components/Carrusel/ImageCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/img-carrusel1.png";
import image2 from "../../assets/images/img-carrusel2.png";
import image3 from "../../assets/images/img-carrusel3.png";
import icono from "../../assets/images/regresa.png";
import "./ImageCarousel.scss";

const imagesWithText = [
  {
    src: image1,
    text: "Encuentra todo tipo de servicios que tienes cerca de ti",
  },
  {
    src: image2,
    text: "Adopta desde tu móvil. Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti",
  },
  {
    src: image3,
    text: "Si eres una asociación sube a tus peludos para darles más difusión",
  },
];

const ImageCarousel = () => {
  const handleReturnToSplash = () => {
    window.location.href = "/user/login";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {imagesWithText.map((image, index) => (
          <div key={index} className="carousel-slide">
            <div>
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </div>
            <h2 className="carousel-text">{image.text}</h2>
          </div>
        ))}
      </Slider>
      <img
        src={icono}
        className="icono"
        alt="Icono"
        onClick={handleReturnToSplash}
      />
    </div>
  );
};

export default ImageCarousel;
