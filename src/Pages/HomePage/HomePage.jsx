import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
// import CarouselHome from "../../components/CarouselHome/CarouselHome";

export default function HomePage() {
  return (
    <div>
      <div className="b__home__articles">
        <div className="logo__header">
          <img src="src/assets/images/logo-header.png" alt="Logo Header" />
        </div>
        {/* <CarouselHome /> */}
        <div className="hello__user">
          <h1>¡Bienvenido!</h1>
        </div>
        <div className="line"></div>
        <div className="head__title">
          <h2>Novedades</h2>
        </div>
        <article>
          <div className="b__article">
            <img src="src/assets/images/article1.jpg" alt="Article 1" />
            <Link className="b__title" to="/">
              <h2>10 Curiosidades sobre las chinchillas</h2>
            </Link>
          </div>
        </article>
        <article>
          <div className="b__article">
            <img src="src/assets/images/article2.jpg" alt="Article 2" />
            <Link className="b__title" to="/">
              <h2>¿Sabes qué comen las iguanas?</h2>
            </Link>
          </div>
        </article>
        <article>
          <div className="b__article">
            <img src="src/assets/images/article3.jpg" alt="Article 3" />
            <Link className="b__title" to="/">
              <h2>10 Lugares para visitar con tu perro en Madrid</h2>
            </Link>
          </div>
        </article>
      </div>
      <div>
        <NavBar />
      </div>
      <div className="profile-link">
        <Link to="/profile">Ir al Perfil</Link>
      </div>
    </div>
  );
}
