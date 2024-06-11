import React from 'react'
import './PetsFilteredPage.scss'

export default function PetsFilteredPage({ location }) {

    const { filteredList } = location.state || [];

    return (
        <div className='b__gallery2'>
            <div className='search__animals'>
                <input placeholder='    Buscar' onKeyUp={(e) => { setInputSearch(e.target.value) }} />
            </div>
            <div>
                {filteredList.length > 0 ? (
                    filteredList.map((animal, index) => (
                        <div key={index}>
                            <h2>{animal.name}</h2>
                            {/* <p>Ciudad: {animal.city}</p>
                            <p>Especie: {animal.species}</p>
                            <p>Edad: {animal.age}</p>
                            <p>Sexo: {animal.sex}</p>
                            <p>Tamaño: {animal.size}</p> */}
                        </div>
                    ))
                ) : (
                    <p>No se encontraron resultados</p>
                )}
            </div>
        </div>
    );
}






{/* {listAnimalsFilter.length ?
                    listAnimalsFilter.map((animal, index) => (
                        <div className='b__animal' key={index}>
                            <img src={animal.image} alt={animal.name} />
                            <Link className='b__animal__name' to={'/' + animal.id}><h2>{animal.name}</h2></Link>
                        </div>

                    )) : (<div className='b__animal'> Animal not found...</div>)} */}