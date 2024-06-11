import React, { useEffect, useState } from "react";
import "./AdoptionGallery.scss";
import back from "../../assets/images/Back.svg";
import filter from "../../assets/images/Filter.svg";
import { Link } from "react-router-dom";

export default function AdoptionGallery({ adoptionList }) {
  const [galleryAdp, setGalleryAdp] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    if (adoptionList && Array.isArray(adoptionList)) {
      let filteredList = adoptionList;

      if (search && search !== "") {
        filteredList = filterLista(filteredList, search);
      }

      if (statusFilter && statusFilter !== "") {
        filteredList = filterByStatus(filteredList, statusFilter);
      }

      setGalleryAdp(filteredList);
    } else {
      setGalleryAdp([]);
    }
  }, [adoptionList, search, statusFilter]);

  const filterLista = (adpList, value) => {
    return adpList.filter((f) =>
      f.animal_id.name.toUpperCase().includes(value.toUpperCase().trim())
    );
  };

  const filterByStatus = (adpList, status) => {
    return adpList.filter((f) => f.adoption_status === status);
  };

  return (
    <div>
      <Link className="backBtn" to={"/gallery"}>
        <img src={back} alt="Back" />
      </Link>

      <div className="filter-dropdown">
        <button className="filterBtn">
          <img src={filter} alt="Filter" />
        </button>
        <div className="dropdown-content">
          <button onClick={() => setStatusFilter("")}>Todos</button>
          <button onClick={() => setStatusFilter("Rechazado")}>
            Rechazado
          </button>
          <button onClick={() => setStatusFilter("En proceso")}>
            En proceso
          </button>
          <button onClick={() => setStatusFilter("Completado")}>
            Completado
          </button>
        </div>
      </div>

      <div className="adoption-gallery">
        <div className="filter-input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre"
          />
        </div>
        <div>
          {galleryAdp.map((adoption, index) => {
            let statusClass;
            switch (adoption.adoption_status) {
              case "Rechazado":
                statusClass = "status-rejected";
                break;
              case "En proceso":
                statusClass = "status-in-process";
                break;
              case "Completado":
                statusClass = "status-completed";
                break;
              default:
                statusClass = "";
            }

            return (
              <div className="adoption-card" key={index}>
                <div className="title-card">
                  <h5>Adopción de {adoption.animal_id.name}</h5>
                  <p className={`status ${statusClass}`}>
                    {adoption.adoption_status}
                  </p>
                </div>

                <div className="info-card">
                  <div className="image-container">
                    <img
                      className="animal-Img"
                      src={adoption.animal_id.image}
                      alt={`Imagen de ${adoption.animal_id.name}`}
                    />
                  </div>

                  <div className="preview-info">
                    <div>
                      <b>Nombre </b>
                      <b>Ciudad </b>
                      <b>Sexo </b>
                    </div>
                    <div>
                      <span>{adoption.animal_id.name}</span>
                      <span>{adoption.animal_id.city}</span>
                      <span>{adoption.animal_id.gender}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
