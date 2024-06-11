import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AnimalsGallery from '../../components/AnimalsGallery/AnimalsGallery';
import NavBar from '../../components/NavBar/NavBar';
import AllPetsFilterPage from '../AllPetsFilterPage/AllPetsFilterPage';
import CarouselGalleryMyPets from '../../components/CarouselGalleryMyPets/CarouselGalleryMyPets';
import { carouselGallery } from '../../data/data.json'
import { useLocation, useSearchParams } from 'react-router-dom';


export default function GalleryPage() {

    const [animals, setAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const getAnimals = async () => {
            const { data } = await axios('http://localhost:3000/animal');
            setAnimals(data.data);
        };
        getAnimals();
    }, []);

    useEffect(() => {
        const applyFiltersFromURL = () => {
            const params = new URLSearchParams(location.search);
            let filteredAnimals = animals;

            const city = params.get('city');
            if (city) {
                filteredAnimals = filteredAnimals.filter(animal => animal.city === city);
            }

            const species = params.get('species');
            if (species) {
                const speciesArray = species.split(',');
                filteredAnimals = filteredAnimals.filter(animal => speciesArray.includes(animal.animalType));
            }

            const age = params.get('age');
            if (age) {
                filteredAnimals = filteredAnimals.filter(animal => animal.age === age);
            }

            const gender = params.get('gender');
            if (gender) {
                filteredAnimals = filteredAnimals.filter(animal => animal.gender === gender);
            }

            const size = params.get('size');
            if (size) {
                filteredAnimals = filteredAnimals.filter(animal => animal.size === size);
            }

            setFilteredAnimals(filteredAnimals);
        };

        if (animals.length > 0) {
            applyFiltersFromURL();
        }
    }, [animals, location.search]);

    return (
        <div>
            <div>
                <AnimalsGallery listAnimals={filteredAnimals.length ? filteredAnimals : animals} />
                {/* <AnimalsGallery listAnimals={animals.data} /> */}
            </div>
            <div>
                <NavBar />
            </div>
        </div>
    )
}

{/* <AnimalsGallery listAnimals={filteredAnimals.length ? filteredAnimals : animals} /> */ }