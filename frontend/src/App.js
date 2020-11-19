import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/pages/LoginButton';
import Home from './components/Home'; 
import About from './components/About';
import Consejos from './components/pages/Consejos';
import Educativo from './components/pages/Educativo';
import Mapa from './components/pages/Mapa';
import Noticias from './components/pages/Noticias';
import Perfil from './components/pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Consejos" component={Consejos}/>
        <Route exact path="/Educativo" component={Educativo}/>
        <Route exact path="/Mapa" component={Mapa}/>
        <Route exact path="/Noticias" component={Noticias}/>
        <Route exact path="/Perfil" component={Perfil}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
