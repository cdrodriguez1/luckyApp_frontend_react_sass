import React, { useEffect, useState } from "react";
import AdoptionDetails from "../../components/AdoptionDetails/AdoptionDetails";

export default function DetailAdoption() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getAdoptionDetails = async () => {
      try {
        const { data } = await axios(
          "http://localhost:3000/adoptions/" + animal_id._id
        );
        setDetails(data);
      } catch (error) {
        console.error("Error de petición de los detalles", error);
      }
      getAdoptionDetails();
    };
  });
  return <div>{<AdoptionDetails detailsList={details.data} />}</div>;
}
