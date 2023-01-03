import React from "react";

import CardBaixar from "../../Components/CardBaixar";
import CardInscrever from "../../Components/CardInscrever";
import Footer from "../../Components/Footer";
import Carrousel from "../../Components/Carrousel"

import Navbar from "../../Components/Navbar";
import CardVantagens from "../../Components/CardVantagens";

export default function Index() {
  return (
    <>
      <div className="container">

        <Navbar />

        <div className="row gy-5">

          <div className='col-12'>
            <Carrousel id="slidesApp" />
          </div>

          <div className="col-12">
            <CardInscrever />
          </div>

          <div className="col-12">
            <CardVantagens />
          </div>

          <div className="col-12">
            <CardBaixar />
          </div>

        </div>
      </div>
  
      <div className="container-fluid gx-0">
        <Footer />
      </div>  
    </>
  );
}
