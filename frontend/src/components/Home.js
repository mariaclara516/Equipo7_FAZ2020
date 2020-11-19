import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Home extends Component{
    
    constructor(props) {
        super(props);
        this.state = {redirigirNoticias:false};
        this.state = {redirigirConsejos:false};
      }
    
    redirigirNoticias=()=>{
        this.setState({
            redirigirNoticias:true
        });
    }

    redirigirConsejos=()=>{
        this.setState({
            redirigirNoticias:true
        });      
    }

    render(){   
        if(this.state.redirigirNoticias)
        {
            return(
                <Redirect to="/Noticias"/>         
            ) 
        }else if(this.state.redirigirConsejos)
        {
            return(
                <Redirect to="/Consejos"/>         
            ) 
        };
        return (              
            <div className="container">
                <h4 className="center">
                    <div className="row">
                        <div className="col">
                            <button type="button" class="btn btn-success" onClick={()=>this.redirigirNoticias()}>
                                Ir a Noticias
                            </button>
                        </div>
                        <div className="col">
                        <div className="col">
                            <button type="button" class="btn btn-success" onClick={()=>this.redirigirConsejos()}>
                                Ir a Consejos
                            </button>
                        </div>
                        </div>
                        <div className="col">.col</div>
                    </div>
                </h4>
            </div>
        )
    }
    
}

export default Home;