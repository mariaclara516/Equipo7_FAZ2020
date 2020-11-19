import React, { Component } from 'react'
import './Login.css';

class Login extends Component{

    render(){
        return(     

            <div className="card shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <div className="card-body">
                    <img className="card-img-top mb-3" src="assets/perfil.jpg" alt="Card image" />
                    <div className="container">
                        <div className="form-group">
                            <label htmlFor="usr">Nombre:</label>
                            <input type="text" placeholder="Maria Clara" className="form-control" id="usr"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Usuario:</label>
                            <input type="text" placeholder="MariaClara1" className="form-control" id="usr" disabled/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Correo:</label>
                            <input type="email" placeholder="mariaclara1@gmail.com" className="form-control" id="usr"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Cambiar Contraseña:</label>
                            <input type="password" className="form-control" id="pwd"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Repetir Contraseña:</label>
                            <input type="password" className="form-control" id="pwd"/>
                        </div>
                        <button type="button" className="btn btn-success col-12" id="btn-ingresar">Guardar</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;