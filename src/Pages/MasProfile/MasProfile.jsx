import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './MasProfile.scss';
import { NavLink } from 'react-router-dom';

export default function MasProfile() {
  return (
    <div>
      <NavBar />
      <div className="masprof-page">
        <div className="masprof-header">
          <div className="masprof-picture">            
          </div>
        </div>
        <div className="menu-options">
          <ul>  
            <li>
               <i className="material-icons" style={{ color: 'blue' }}>home</i>
               <span className="text">Asociaciones protectoras</span>
               <i className="material-icons arrow" style={{ color: 'orange' }}>chevron_right</i>
            </li>
            <li>
                <i className="material-icons" style={{ color: 'blue' }}>event</i>
                <span className="text">Eventos</span>
                <i className="material-icons arrow" style={{ color: 'orange' }}>chevron_right</i>
            </li>
            <li>
                <i className="material-icons" style={{ color: 'blue' }}>book</i>
                <span className="text">Curiosidades</span>
                <i className="material-icons arrow" style={{ color: 'orange' }}>chevron_right</i>
            </li>
            <li>
                <i className="material-icons" style={{ color: 'blue' }}>help_outline</i>
                <span className="text">Ayuda</span>
                <i className="material-icons arrow" style={{ color: 'orange' }}>chevron_right</i>

            </li>
            <li>
              <i className="material-icons" style={{ color: 'blue' }}>settings</i>
              <span className="text">Configuracion</span>
              <i className="material-icons arrow" style={{ color: 'orange' }}>chevron_right</i>
            </li>
            <li>
              <NavLink to="/login" className="button">
                <i className="material-icons" style={{ color: 'blue' }}>exit_to_app</i>
                <span className="text">Cerrar sesión</span>
                <i className="material-icons arrow" style={{ color: 'orange' }}>chevron_right</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}