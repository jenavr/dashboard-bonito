import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VuiButton from "components/VuiButton";

import pic from './Citas-Medicas.png'

import './Consultorios2.css';

const Home1 = () => {  

  return (
    <div>
      <h1>Bienvenido</h1>
        <div className="buttonhome">
        <VuiButton variant="contained" color="info" href="/dashboard2">
          Encuentra un Médico
        </VuiButton>
        </div>
        <div className="buttonhome">
        <VuiButton variant="contained" color="info" href="/tables">
          Ya tengo una cita
        </VuiButton>
        </div>
        <div className="wrapper">
          <img src=  {pic} class="fondo" />
        </div>
        
       

    </div>
    
  );
};

export default Home1;
