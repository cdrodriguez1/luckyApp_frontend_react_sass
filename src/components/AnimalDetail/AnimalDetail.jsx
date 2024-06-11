import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import './AnimalDetail.scss';
import back from '../../assets/images/volver.png';
import { API } from '../../api';


export default function AnimalDetail() {
    const { _id } = useParams();
    const [animal, setAnimal] = useState({});    

    useEffect(() => {
        const getAnimal = async () => {
            try {
                const { data } = await axios("http://localhost:3000/animal/" + _id);               

                setAnimal(data.data)
            } catch (error) {
                console.error('Error al obtener los detalles del animal:', error);
            }
        };

        getAnimal();
    }, []);        


    return (
        <div className="animal-detail-container">
            <img src={animal.image} alt={animal.name} />

    <div className='texto'><h2>Datos  Salud   Adopcion</h2></div>    

 <div className="animal-details">
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Nombre:</strong> {animal.name}</p>
    </div>
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Tipo:</strong> {animal.animalType}</p>
    </div>         
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Ubicación:</strong> {animal.city}</p>
    </div>
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Especie:</strong> {animal.species}</p>
    </div>
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Fecha de Nacimiento:</strong> {animal.birthDate ? new Date(animal.birthDate).toLocaleDateString() : '-'}</p>
    </div>
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Sexo:</strong> {animal.gender}</p>
    </div>
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Tamaño:</strong> {animal.size}</p>
    </div>
    <div className="detail-row">
        <i className="fas fa-paw" style={{ color: 'blue' }}></i>
        <p><strong>Peso:</strong> {animal.weight}</p>
    </div>
        </div>
            <NavLink to="/animals" className="back-link">
                <img src={back} alt="Volver" />
            </NavLink>
        </div>
    );
}