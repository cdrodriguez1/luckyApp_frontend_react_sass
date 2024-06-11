import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllPetsFilterPage.scss";

export default function AllPetsFilterPage({ listAnimalsToFilt }) {
  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const cityOptions = ["Madrid", "Barcelona"];
  const animalTypeOptions = [
    { image: "src/assets/images/icon-dog.png", title: "Perro" },
    { image: "src/assets/images/icon-cat.png", title: "Gato" },
    { image: "src/assets/images/icon-rabbit.png", title: "Conejo" },
    { image: "src/assets/images/icon-mouse.png", title: "Cobaya" },
    { image: "src/assets/images/icon-mammal.png", title: "Pequeño Mamífero" },
    { image: "src/assets/images/icon-ferret.png", title: "Hurón" },
    { image: "src/assets/images/icon-fish.png", title: "Pez" },
    { image: "src/assets/images/icon-reptile.png", title: "Reptil" },
    { image: "src/assets/images/icon-frog.png", title: "Anfibio" },
    { image: "src/assets/images/icon-spider.png", title: "Arácnido o Insecto" },
    { image: "src/assets/images/icon-bird.png", title: "Ave" },
  ];
  const ageOptions = ["Cachorro", "Joven", "Adulto"];
  const genderOptions = [
    { image: "src/assets/images/icon-male.png", title: "Macho" },
    { image: "src/assets/images/icon-female.png", title: "Hembra" },
  ];
  const sizeOptions = [
    { image: "src/assets/images/icon-size-small.png", title: "Pequeño" },
    { image: "src/assets/images/icon-size-medium.png", title: "Mediano" },
    { image: "src/assets/images/icon-size-big.png", title: "Grande" },
  ];

  useEffect(() => {
    if (listAnimalsToFilt && listAnimalsToFilt.length) {
      applyFilters();
    }
  }, [listAnimalsToFilt]);

  const applyFilters = () => {
    const queryParams = new URLSearchParams();
    if (selectedCity) queryParams.append("city", selectedCity);
    if (selectedSpecies.length)
      queryParams.append("species", selectedSpecies.join(","));
    if (selectedAge) queryParams.append("age", selectedAge);
    if (selectedGender) queryParams.append("gender", selectedGender);
    if (selectedSize) queryParams.append("size", selectedSize);

    navigate(`/gallery?${queryParams.toString()}`);
  };

  const toggleSpecies = (animalType) => {
    setSelectedSpecies((prev) =>
      prev.includes(animalType.title)
        ? prev.filter((item) => item !== animalType.title)
        : [...prev, animalType.title]
    );
  };

  const toggleGender = (gender) => {
    setSelectedGender(gender.title === selectedGender ? "" : gender.title);
  };

  const toggleSize = (size) => {
    setSelectedSize(size.title === selectedSize ? "" : size.title);
  };

  return (
    <div className="b__gallery">
      <div>
        <h1 className="title-main-filters">Filtros</h1>
      </div>
      <div className="filter__section">
        <div className="filter__group">
          <h2 className="title-city-filter">Ciudad</h2>
          <select
            className="selectCity"
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Ciudad</option>
            {cityOptions.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="filter__group">
          <h2 className="title-species-filter">Especie</h2>
          <div className="species__icons">
            {animalTypeOptions.map((animalType, index) => (
              <div
                key={index}
                onClick={() => toggleSpecies(animalType)}
                className={`species__icon ${
                  selectedSpecies.includes(animalType.title) ? "selected" : ""
                }`}
              >
                <img src={animalType.image} alt={animalType.title} />
                <p className="p-class">{animalType.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="filter__group">
          <h2 className="title-age-filter">Edad</h2>
          <select onChange={(e) => setSelectedAge(e.target.value)}>
            <option value="">Seleccionar Edad</option>
            {ageOptions.map((age, index) => (
              <option key={index} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div className="filter__group">
          <h2 className="title-gender-filter">Género</h2>
          <div className="sex__icons">
            {genderOptions.map((gender, index) => (
              <div
                key={index}
                onClick={() => toggleGender(gender)}
                className={`sex__icon ${
                  selectedGender === gender.title ? "selected" : ""
                }`}
              >
                <img src={gender.image} alt={gender.name} />
                <p>{gender.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="filter__group">
          <h2 className="title-size-filter">Tamaño</h2>
          <div className="size__icons">
            {sizeOptions.map((size, index) => (
              <div
                key={index}
                onClick={() => toggleSize(size)}
                className={`size__icon ${
                  selectedSize === size.title ? "selected" : ""
                }`}
              >
                <img src={size.image} alt={size.title} />
                <p>{size.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="apply__button" onClick={applyFilters}>
          Aplicar
        </button>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import './AllPetsFilterPage.scss';

// export default function AllPetsFilterPage({ listAnimalsToFilt }) {

//     const [listAnimalsFilter, setListAnimalsFilter] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [selectedSpecies, setSelectedSpecies] = useState([]);
//     const [selectedAge, setSelectedAge] = useState('');
//     const [selectedSex, setSelectedSex] = useState('');
//     const [selectedSize, setSelectedSize] = useState('');

//     const cityOptions = ['Madrid', 'Barcelona'];

//     const animalTypeOptions = [
//         { image: 'src/assets/images/icon-dog.png', title: 'Perro' },
//         { image: 'src/assets/images/icon-cat.png', title: 'Gato' },
//         { image: 'src/assets/images/icon-rabbit.png', title: 'Conejo' },
//         { image: 'src/assets/images/icon-mouse.png', title: 'Cobaya' },
//         { image: 'src/assets/images/icon-mammal.png', title: 'Pequeño Mamífero' },
//         { image: 'src/assets/images/icon-ferret.png', title: 'Hurón' },
//         { image: 'src/assets/images/icon-fish.png', title: 'Pez' },
//         { image: 'src/assets/images/icon-reptile.png', title: 'Reptil' },
//         { image: 'src/assets/images/icon-frog.png', title: 'Anfibio' },
//         { image: 'src/assets/images/icon-spider.png', title: 'Arácnido o Insecto' },
//         { image: 'src/assets/images/icon-bird.png', title: 'Ave' }
//     ];

//     const ageOptions = ['Cachorro', 'Joven', 'Adulto'];

//     const sexOptions = [
//         { image: 'src/assets/images/icon-male.png', title: 'Macho' },
//         { image: 'src/assets/images/icon-female.png', title: 'Hembra' }
//     ];

//     const sizeOptions = [
//         { image: 'src/assets/images/icon-size-small.png', title: 'Pequeño' },
//         { image: 'src/assets/images/icon-size-medium.png', title: 'Mediano' },
//         { image: 'src/assets/images/icon-size-big.png', title: 'Grande' }
//     ];

//     useEffect(() => {
//         if (listAnimalsToFilt && listAnimalsToFilt.length) {
//             applyFilters();
//         }
//     }, [listAnimalsToFilt]);

//     const applyFilters = () => {
//         let filteredList = listAnimalsToFilt;

//         if (selectedCity) {
//             filteredList = filteredList.filter(animal => animal.city === selectedCity);
//         }

//         if (selectedSpecies.length) {
//             filteredList = filteredList.filter(animal => selectedSpecies.includes(animal.animalType));
//         }

//         if (selectedAge) {
//             filteredList = filteredList.filter(animal => animal.age === selectedAge);
//         }

//         if (selectedSex) {
//             filteredList = filteredList.filter(animal => animal.sex === selectedSex);
//         }

//         if (selectedSize) {
//             filteredList = filteredList.filter(animal => animal.size === selectedSize);
//         }

//         setListAnimalsFilter(filteredList);

//     };

//     const toggleSpecies = (animalType) => {
//         setSelectedSpecies(prev =>
//             prev.includes(animalType.title)
//                 ? prev.filter(item => item !== animalType.title)
//                 : [...prev, animalType.title]
//         );
//     };

//     const toggleSex = (sex) => {
//         setSelectedSex(sex.title === selectedSex ? '' : sex.title);
//     };

//     const toggleSize = (size) => {
//         setSelectedSize(size.title === selectedSize ? '' : size.title);
//     };

//     return (
//         <div className='b__gallery'>
//             <div><h1>Filtros</h1></div>
//             <div className='filter__section'>
//                 <div className='filter__group'>
//                     <h2>Ciudad</h2>
//                     <select onChange={(e) => setSelectedCity(e.target.value)}>
//                         <option value="">Ciudad</option>
//                         {cityOptions.map((city, index) => (
//                             <option key={index} value={city}>{city}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className='filter__group'>
//                     <h2>Especie</h2>
//                     <div className='species__icons'>
//                         {animalTypeOptions.map((animalType, index) => (
//                             <div key={index} onClick={() => toggleSpecies(animalType)} className={`species__icon ${selectedSpecies.includes(animalType.title) ? 'selected' : ''}`}>
//                                 <img src={animalType.image} alt={animalType.title} />
//                                 <p>{animalType.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className='filter__group'>
//                     <h2>Edad</h2>
//                     <select onChange={(e) => setSelectedAge(e.target.value)}>
//                         <option value="">Seleccionar Edad</option>
//                         {ageOptions.map((age, index) => (
//                             <option key={index} value={age}>{age}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className='filter__group'>
//                     <h2>Sexo</h2>
//                     <div className='sex__icons'>
//                         {sexOptions.map((sex, index) => (
//                             <div key={index} onClick={() => toggleSex(sex)} className={`sex__icon ${selectedSex === sex.title ? 'selected' : ''}`}>
//                                 <img src={sex.image} alt={sex.title} />
//                                 <p>{sex.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className='filter__group'>
//                     <h2>Tamaño</h2>
//                     <div className='size__icons'>
//                         {sizeOptions.map((size, index) => (
//                             <div key={index} onClick={() => toggleSize(size)} className={`size__icon ${selectedSize === size.title ? 'selected' : ''}`}>
//                                 <img src={size.image} alt={size.title} />
//                                 <p>{size.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <NavLink className='apply__button' to={'/gallery?sex=macho'}>
//                     <button className='apply__button' onClick={applyFilters}>Aplicar</button>
//                 </NavLink>
//             </div>
//         </div>
//     );
// }

