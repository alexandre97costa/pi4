import React, { useEffect } from "react";

import slide1 from "../Assets/images/slide1.jpg";
import slide2 from "../Assets/images/slide2.jpg";
import slide3 from "../Assets/images/slide3.jpg";

import Botao from "./Botao";

export default function Carrousel() {
  //É só um exemplo
  const imagens = [{
    imagem: slide1,
    alt: "Imagem 1"
  }, {
    imagem: slide2,
    alt: "Imagem 2"
  }, {
    imagem: slide3,
    alt: "Imagem 3"
  }]


  useEffect(() => {
    console.log("Sou do load 1 vez no Carrousel")
  }, [])

  return (
    <div id="carouselMicrosite" className="carousel slide rounded-4" data-bs-ride="true">
      <div className="carousel-indicators">
        {imagens.map((item, index) => {
          if (!index)
            return (<button key={index} type="button" data-bs-target="#carouselMicrosite" data-bs-slide-to={index} className="active" aria-current="true" aria-label={'Slide ' + index} />)
          return (<button key={index} type="button" data-bs-target="#carouselMicrosite" data-bs-slide-to={index} aria-label={'Slide ' + index} />)
        })}
      </div>
      <div className="carousel-inner">
        {imagens.map((item, index) => {

          return (
            <div key={index} className={"carousel-item position-relative h-100" + (!index ? " active" : "")}>
              <Botao
                className="btn-dark d-none d-md-block  position-absolute"
                texto="Download"
                style={{top: '58%', left: '18.7%'}}
              />
              <img
                src={item.imagem}
                className="d-block w-100 h-25rem rounded-4"
                alt={item.alt}
              />
            </div>
          );
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselMicrosite" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselMicrosite" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
