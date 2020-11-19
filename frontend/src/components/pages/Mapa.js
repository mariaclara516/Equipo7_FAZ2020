import React, { Component } from 'react'
import './Mapa.css';

class Mapa extends Component{


    render(){
        return(     

            <div className="container mb-5">
                <div className="mt-2">
                    <h1>Contaminación <i className="fas fa-map-marked-alt"></i></h1>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.69937789693!2d-75.65125202199363!3d6.2443694707341955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Medellin%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1601424434097!5m2!1sen!2sco"
                    className="col-12 mt-3 iframe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            
        );
    }
}

export default Mapa;