import React, { Component } from 'react'
import './Noticias.css';

class Noticias extends Component{


    render(){
        return(

            <div className="container mt-1">
                <div>
                    <h1>Noticias <i className="fas fa-newspaper"></i></h1>
                </div>
                <div className="card shadow-lg p-3 mb-3 bg-white rounded">
                    <div className="card-body">
                        <img className="card-img-top mb-3" src="assets/noticia1.jpg" alt="Card image" />
                        <div className="container">
                            <p>Se cae proyecto que pretendía construir un puerto en Tribugá</p>
                        </div>
                    </div>
                </div>
                <div className="card shadow-lg p-3 mb-3 bg-white rounded">
                    <div className="card-body">
                        <img className="card-img-top mb-3" src="assets/noticia2.jpg" alt="Card image" />
                        <div className="container">
                            <p>Rescatistas han liberado 110 ballenas del estancamiento masivo en Australia.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Noticias;