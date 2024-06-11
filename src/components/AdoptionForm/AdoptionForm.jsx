import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import back from "../../assets/images/Back.svg";
import "./AdoptionForm.scss";
import { API } from "../../api";

export default function AdoptionForm() {
  // ¿Se relaciona con el id de la url del animal?
  const { animal_id } = useParams();
  const [formData, setFormData] = useState({
    animal_id: animal_id,
    name: "",
    email: "",
    dni: "",
    phone: "",
    address: "",
    postalcode: "",
    city: "",
    terms: undefined,
    has_animals: undefined,
    other_animals: "",
    friendly_animals: "",
    purpose: "",
    know_needs: "",
    know_expenses: "",
    know_food: "",
    user_from: "",
    rent: undefined,
    allow_animals: undefined,
    move_out: undefined,
    has_garden: undefined,
    live_with_people: undefined,
    everyone_agrees: undefined,
    visit: undefined,
  });

  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [animal, setAnimal] = useState([]);
  const [patch_id, setPatch_Id] = useState("");

  useEffect(() => {
    const getAnimal = async () => {
      try {
        const { data } = await API.get(
          "http://localhost:3000/animal/" + animal_id
        );
        console.log(data.animal_id);
        setAnimal(data);
      } catch (error) {
        console.error("No se ha podido obtener el id del animal", error);
      }

      console.log(data);
    };
    getAnimal();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.stringify();
    }

    let url = "";
    let method = "";
    let post_id = "";
    if (page === 1) {
      url = "http://localhost:3000/adoptions";
      method = "POST";
    } else {
      url = `http://localhost:3000/adoptions/${patch_id}`;
      method = "PATCH";
    }

    try {
      const response = await API({
        method: method,
        url: url,
        data: formData,
      });
      setPatch_Id(response.data.data._id);
      setStatus("Solicitud de adopción enviada");
    } catch (error) {
      console.error("Error al enviar la solicitud de adopción", error);
      setStatus("Error al enviar la solicitud de adopción");
    }
  };

  const nextPage = (e) => {
    if (formData.terms === true) {
      handleSubmit(e);
      setPage((prevPage) => prevPage + 1);
    } else {
      alert("Acepta los términos y condiciones antes para continuar");
    }
  };

  const prevPage = () => {
    if (page >= 2) {
      setPage((prevPage) => prevPage - 1);
      localStorage.setItem("formData", JSON.stringify(formData));
    } else {
      window.location.href = "/adoptions";
    }
  };

  return (
    <div>
      <Link className="backBtn-form" onClick={prevPage}>
        <img src={back} alt="Back" />
      </Link>
      <div className="div-form">
        <form onSubmit={handleSubmit}>
          <h4>Formulario de Adopción</h4>

          {page === 1 && (
            <div className="data-form">
              <div className="data-info">
                <div>
                  <h2 className="title-form">Tus Datos</h2>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre y Apellidos"
                  required
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  required
                />
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  placeholder="DNI"
                  required
                />
              </div>

              <div className="data-info">
                <div className="title-form-2">
                  <h2>Dirección</h2>
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Calle, número, piso"
                  required
                />
                <input
                  type="text"
                  id="postalcode"
                  name="postalcode"
                  value={formData.postalcode}
                  onChange={handleChange}
                  placeholder="Código Postal"
                  required
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ciudad"
                  required
                />
              </div>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="terms"
                  name="terms"
                  value={formData.terms}
                  checked={formData.terms === true}
                  onChange={() => setFormData({ ...formData, terms: true })}
                />
                Acepto los términos y condiciones de la adopción
              </label>

              <button className="continue" type="button" onClick={nextPage}>
                Continuar
              </button>
            </div>
          )}

          {page === 2 && (
            <div className="data-form">
              <div className="data-info">
                <div className="title-form-3">
                  <h2>Sobre las mascotas</h2>
                </div>
                <div className="checkbox-label">
                  <label>¿Tienes otros animales?</label>

                  <label className="radio-label">
                    <input
                      type="radio"
                      id="has_animals-si"
                      value={formData.has_animals === true}
                      name="has_animals"
                      onChange={handleChange}
                    />
                    Sí
                  </label>

                  <label className="radio-label">
                    <input
                      type="radio"
                      id="has_animals-no"
                      value={formData.has_animals === false}
                      name="has_animals"
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>

                <input
                  type="text"
                  id="other_animals"
                  name="other_animals"
                  value={formData.other_animals}
                  onChange={handleChange}
                  placeholder="¿Cuáles?"
                />

                <input
                  type="text"
                  id="friendly_animals"
                  name="friendly_animals"
                  value={formData.friendly_animals}
                  onChange={handleChange}
                  placeholder="¿Se lleva bien con otros animales?"
                />

                <label className="text-label">
                  ¿Por qué has elegido adoptar?
                  <input
                    type="text"
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                  />
                </label>

                <label className="text-label">
                  ¿Conoces las necesidades del animal?
                  <input
                    type="text"
                    id="know_needs"
                    name="know_needs"
                    value={formData.know_needs}
                    onChange={handleChange}
                  />
                </label>

                <label className="text-label">
                  ¿Conoces sus gastos?
                  <input
                    type="text"
                    id="know_expenses"
                    name="know_expenses"
                    value={formData.know_expenses}
                    onChange={handleChange}
                  />
                </label>

                <label className="text-label">
                  ¿Conoces su alimentación?
                  <input
                    type="text"
                    id="know_food"
                    name="know_food"
                    value={formData.know_food}
                    onChange={handleChange}
                  />
                </label>

                <button className="continue" type="button" onClick={nextPage}>
                  Continuar
                </button>
              </div>
            </div>
          )}

          {page === 3 && (
            <div className="data-form">
              <div className="data-info">
                <div className="title-form-4-b">
                  <h2>Familia y hogar</h2>
                </div>
                <div className="text-label">
                  <label className="label-from">
                    ¿Donde vives?
                    <input
                      type="text"
                      id="user_from"
                      name="user_from"
                      value={formData.user_from}
                      onChange={handleChange}
                      placeholder="Piso, casa, chalet..."
                    />
                  </label>

                  <label className="radio-label">
                    <div>¿Vives de alquiler?</div>
                    <input
                      className="radio"
                      type="radio"
                      id="rent-si"
                      value={formData.rent === true}
                      name="rent"
                      onChange={handleChange}
                    />
                    Sí
                    <input
                      className="radio"
                      type="radio"
                      id="rent-no"
                      value={formData.rent === false}
                      name="rent"
                      onChange={handleChange}
                    />
                    No
                  </label>

                  <label className="radio-label">
                    <div>¿Tu casero permite animales?</div>
                    <input
                      className="radio"
                      type="radio"
                      id="allow_animals-si"
                      value={formData.allow_animals === true}
                      name="allow_animals"
                      onChange={handleChange}
                    />
                    Sí
                    <input
                      className="radio"
                      type="radio"
                      id="allow_animals-no"
                      value={formData.allow_animals === false}
                      name="allow_animals"
                      onChange={handleChange}
                    />
                    No
                  </label>

                  <label className="radio-label">
                    <div>¿Crees que podrías mudarte pronto?</div>
                    <input
                      className="radio"
                      type="radio"
                      id="move_out-si"
                      value={formData.move_out === true}
                      name="move_out"
                      onChange={handleChange}
                    />
                    Sí
                    <input
                      className="radio"
                      type="radio"
                      id="move_out-no"
                      value={formData.move_out === false}
                      name="move_out"
                      onChange={handleChange}
                    />
                    No
                  </label>

                  <label className="radio-label">
                    <div>¿Tiene jardín?</div>
                    <input
                      className="radio"
                      type="radio"
                      id="has_garden-si"
                      value={formData.has_garden === true}
                      name="has_garden"
                      onChange={handleChange}
                    />
                    Sí
                    <input
                      className="radio"
                      type="radio"
                      id="has_garden-no"
                      value={formData.has_garden === false}
                      name="has_garden"
                      onChange={handleChange}
                    />
                    No
                  </label>

                  <label className="radio-label">
                    <div>¿Vives con otras personas?</div>
                    <input
                      className="radio"
                      type="radio"
                      id="live_with_people-si"
                      value={formData.live_with_people === true}
                      name="live_with_people"
                      onChange={handleChange}
                    />
                    Sí
                    <input
                      className="radio"
                      type="radio"
                      id="live_with_people-no"
                      value={formData.live_with_people === false}
                      name="live_with_people"
                      onChange={handleChange}
                    />
                    No
                  </label>

                  <label className="radio-label">
                    <div>¿Están todos de acuerdo con la adopción?</div>
                    <input
                      className="radio"
                      type="radio"
                      id="everyone_agrees-si"
                      value={formData.everyone_agrees === true}
                      name="everyone_agrees"
                      onChange={handleChange}
                    />
                    Sí
                    <input
                      className="radio"
                      type="radio"
                      id="everyone_agrees-no"
                      value={formData.everyone_agrees === false}
                      name="everyone_agrees"
                      onChange={handleChange}
                    />
                    No
                  </label>

                  <label className="radio-label">
                    <div>¿Estás de acuerdo con que visitemos tu casa?</div>
                    <input
                      className="radio"
                      type="radio"
                      id="visit-si"
                      value={formData.visit === true}
                      name="visit"
                      onChange={handleChange}
                    />
                    Sí
                    <input
                      className="radio"
                      type="radio"
                      id="visit-no"
                      value={formData.visit === false}
                      name="visit"
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>
              <button className="continue" type="submit">
                Enviar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
