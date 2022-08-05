import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MapView from "./MapViews";

import './Consultorios2.css';

const Home = () => {  

  return (
    <div>
      <h1>Nuestros consultorios</h1>
        <div className="container">
            <iframe className="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112020.01469417248!2d-106.06461815!3d28.670931249999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea449d5d484033%3A0xb7f1a7a706dd1d7b!2sChihuahua%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1659631924190!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  );
};

export default Home;
