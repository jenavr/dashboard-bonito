import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VuiButton from "components/VuiButton";
import Button from 'react-bootstrap/Button';


import pic from './Citas-Medicas.png'



import './Consultorios2.css';

const Home1 = () => {  

  return (
    <div>
    <div>
    <h1>Bienvenido</h1>
    <div className="wrapper">
          <img src=  {pic} class="fondo" />
      <a href="/dashboard2">
        <button type="button" class="btn btn-primary medico">Encuentra un Médico
        </button>
      </a>
      <a href="/tables">
      <button type="button" class="btn btn-primary medico">Ya tengo una cita
        </button>
      </a>
      </div>
        
        </div>
      
  </div>
    


    
  );
};

export default Home1;
