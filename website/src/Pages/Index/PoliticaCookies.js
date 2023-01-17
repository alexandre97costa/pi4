import React, { useEffect } from 'react';

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Cookies from "../../Components/CardCookies";

export default function PoliticaCookies(props) {
    return (
        <>
          <div className="container">
    
            <Navbar />
    
            <div className="row gy-5">
    
              <div className='col-12'>
                <Cookies/>
              </div>
    
            </div>
          </div>
      
          <div className="container-fluid gx-0">
            <Footer />
          </div>  
        </>
      );
    }