import React, { Component } from 'react';
import './Consejos.css';

class Consejos extends Component{


    render(){
        return(     

            <div className="container mt-1">
                <div>
                    <h1>Consejos <i className="fas fa-book-open"></i></h1>
                </div>
                <div className="card shadow-lg p-3 mb-3 bg-white rounded">
                    <div className="card-body">
                        <img className="card-img-top mb-3" src="/assets/botellas.jpg" alt="Card image" />
                        <div className="container">
                            <p>No compre botellas cada vez que quiera tomar agua, cargue su botella y pida a restaurantes que la llene con agua potable</p>
                        </div>
                    </div>
                </div>
                <div className="card shadow-lg p-3 mb-3 bg-white rounded">
                    <div className="card-body">
                        <img className="card-img-top mb-3" src="assets/fondo2.jpg" alt="Card image" />
                        <div className="container">
                            <p>Preciosos cielos para ir al lago Ness.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Consejos;