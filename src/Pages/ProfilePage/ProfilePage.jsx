import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Perfil from "../../assets/images/Perfil.png";
import "./ProfilePage.scss";

export default function ProfilePage() {
  return (
    <div>
      <NavBar />
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={Perfil} alt="Foto de perfil" />
          </div>
        </div>
        <div className="menu-options">
          <ul>
            <li>
              <i className="material-icons">person</i>
              <span className="text">Mi perfil</span>
              <i
                className="material-icons arrow"
                style={{ color: "orange" }}
              >
                chevron_right
              </i>
            </li>
            <li>
              <i className="material-icons">location_on</i>
              <span className="text">Direcciones</span>
              <i
                className="material-icons arrow"
                style={{ color: "orange" }}
              >
                chevron_right
              </i>
            </li>
            <li>
              <i className="material-icons">favorite</i>
              <span className="text">Favoritos</span>
              <i
                className="material-icons arrow"
                style={{ color: "orange" }}
              >
                chevron_right
              </i>
            </li>
            <li>
              <i className="material-icons">notifications</i>
              <span className="text">Notificaciones</span>
              <i
                className="material-icons arrow"
                style={{ color: "orange" }}
              >
                chevron_right
              </i>
            </li>
            <li>
              <i className="material-icons">pets</i>
              <span className="text">Estado de la adopción</span>
              <i
                className="material-icons arrow"
                style={{ color: "orange" }}
              >
                chevron_right
              </i>
            </li>
            <li>
              <i className="material-icons">help</i>
              <span className="text">Apadrinar</span>
              <i
                className="material-icons arrow"
                style={{ color: "orange" }}
              >
                chevron_right
              </i>
            </li>
            <li>
              <i className="material-icons">donate</i>
              <span className="text">Donar</span>
              <i
                className="material-icons arrow"
                style={{ color: "orange" }}
              >
                chevron_right
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}