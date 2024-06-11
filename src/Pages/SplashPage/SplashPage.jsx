import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/group29@2x.png";
import branlogo from "../../assets/images/group@2x.png";
import ImageCarousel from "../../components/Carrusel/ImageCarousel";
import "./SplashPage.scss";
import "../../components/Carrusel/ImageCarousel.scss";

export default function SplashPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/carousel");
  };

  return (
    <div className="splash-page">
      <div className="img-name" onClick={handleClick}>
        <img src={logo} alt="Logo" />
        <img src={branlogo} alt="Brand Logo" />
      </div>
    </div>
  );
}
