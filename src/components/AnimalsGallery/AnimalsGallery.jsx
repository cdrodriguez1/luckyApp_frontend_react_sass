import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AnimalsGallery.scss";
import CarouselGalleryMyPets from "../CarouselGalleryMyPets/CarouselGalleryMyPets";

// import { carouselGallery } from '../data/data.json'

export default function AnimalsGallery({ listAnimals }) {
  const [listAnimalsFilter, setListAnimalsFilter] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    if (listAnimals && listAnimals?.length) {
      if (inputSearch && inputSearch !== "") {
        const list = filterList(listAnimals, inputSearch);
        // console.log(list, inputSearch);
        setListAnimalsFilter(list);
      } else {
        setListAnimalsFilter(listAnimals);
      }
    }
  }, [listAnimals, inputSearch]);

  const filterList = (list, value) => {
    return list.filter((f) =>
      f.name.toUpperCase().includes(value.toUpperCase().trim())
    );
  };

  useEffect(() => {
    // console.log(inputSearch);
  }, [listAnimals]);

  return (
    <div className="b__gallery">
      <div className="search__animals">
        <input
          placeholder="    Buscar"
          onKeyUp={(e) => {
            setInputSearch(e.target.value);
          }}
        />
      </div>
      <div className="title__my__pets">
        <h2>Mis mascotas</h2>
        <p>Accede al perfil de tus mascotas</p>
      </div>
      <div>
        <CarouselGalleryMyPets />
      </div>
      <div className="line"></div>
      <Link className="title__state__adoption" to={"/adoptions"}>
        <h2>Estado de la adopción</h2>
      </Link>
      <div className="title__adoption">
        <h2>Animales en adopción</h2>
        <Link to={"/pets-filter"}>
          <img src="src/assets/images/icon-filter.png" />
        </Link>
      </div>
      {listAnimalsFilter.length ? (
        listAnimalsFilter.map((animal, index) => (
          <div className="b__animal" key={index}>
            <img src={animal.image} alt={animal.name} />
            <Link className="b__animal__name" to={`/adoptions/${animal.id}`}>
              <h2>{animal.name}</h2>
            </Link>
          </div>
        ))
      ) : (
        <div className="b__animal"> Animal not found...</div>
      )}
    </div>
  );
}
