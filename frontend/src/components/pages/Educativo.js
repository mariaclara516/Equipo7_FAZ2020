import React, { Component } from 'react';
import './Educativo.css';

class Educativo extends Component{


    render(){
        return(     

            <div className="container mt-3">
                <div className="container-fluid bg-success cont-card titulo">
                    <h1>Residuos Aprovechables</h1>
                    <p>Es cualquier material, objeto, sustancia o elemento sólido que no tiene valor de uso para quien lo genere, pero que es susceptible de aprovechamiento para su reincorporación a un proceso productivo</p>
                    <p>La gestión de los residuos se enfoca en la separación en la fuente de los residuos (aprovechables y no aprovechables), con la finalidad de preservar el medio ambiente y mitigar la contaminación que provocan los residuos que generamos en casa que
                        son dispuestos al relleno sanitario</p>
                </div>
                <br/>
                <div className="container-fluid bg-warning cont-card titulo">
                    <h1>Residuos No Aprovechables</h1>
                    <p>Material, objeto, sustancia o elemento sólido que no ofrece ninguna posibilidad de aprovechamiento. Son residuos que no tienen valor comercial y solamente se pueden llevar a disposición final.</p>
                </div>
                <br/>
                <div className="container-fluid bg-secondary cont-card titulo">
                    <h1>Residuos Peligrosos</h1>
                    <p>Son aquellos residuos producidos por el generador con alguna de las siguientes características: infecciosos, ombustibles, inflamables, explosivos, reactivos, Radiactivos, volátiles, corrosivos y/o tóxicos; las cuales pueden causar daño a la salud humana y/o al medio ambiente. Así mismo se consideran peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos.</p>
                </div>
            </div>
            
        );
    }
}

export default Educativo;