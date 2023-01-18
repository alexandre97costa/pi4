import React, { useEffect } from 'react';

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Contactos from "../../Components/CardContactos";
import Voltar from "../../Components/BotaoVoltar";

export default function TermosUtilizacao(props) {
    return (
        <>
          <div className="container">
    
            <Navbar />
            <Voltar />
    
            <div className="row gy-5">
    
              <div className='col-12'>
                <Contactos/>
              </div>
    
            </div>
          </div>
      
          <div className="container-fluid gx-0">
            <Footer />
          </div>  
        </>
      );
    }