import React, { useEffect, useState } from "react";
import AdoptionGallery from "../../components/AdoptionGallery/AdoptionGallery";
import axios from "axios";
import { API } from "../../api";

export default function AdoptionPage() {
  const [adoptions, setAdoptions] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllAdoptions = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const { data } = await API.get("http://localhost:3000/adoptions");
        // console.log(data.data); Array en adopción
        setAdoptions(data);
      } catch (error) {
        console.error("Error al recoger las adopciones", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAllAdoptions();
  }, []);

  if (loading) {
    return <p>Cargando adopciones...</p>;
  }

  if (error) {
    return <p>Error al cargar las adopciones: {error.message}</p>;
  }

  return (
    <div>
      {adoptions.data && adoptions.data.length > 0 ? (
        <AdoptionGallery adoptionList={adoptions.data} />
      ) : (
        <p>No hay adopciones disponibles.</p>
      )}
    </div>
  );
}
