import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MapView from "./MapViews";
import pic from './Citas-Medicas.png'

import './Consultorios2.css';

const Home1 = () => {  

  return (
    <div>
      <h1>Bienvenido</h1>
        <div className="wrapper">
          <img src=  {pic} class="fondo" />
          
        </div>
        
       

    </div>
    
  );
};

export default Home1;
