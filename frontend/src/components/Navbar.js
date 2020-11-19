import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Noticias">Inicio <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Noticias">Noticias</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Consejos">Concejos Verdes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Educativo">Educativo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Mapa">Mapa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Perfil"> Mi Perfil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/Login">Ingresar</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;