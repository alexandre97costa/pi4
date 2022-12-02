import React from 'react'

import fotoagente from '../Assets/Images/fotoagente.jpg'


export default function CartaoDetais(props) {
  return (

<div className="card border ps-0 border-0 shadow mb-3">
  <div className="row g-0">
    <div className="col-4">
    <img src={fotoagente} className="img-fluid rounded-start"/> 
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> {props.title} </h5>
        <h6 className="card-subtitle mb-5 text-muted"> {props.subTitle}</h6>  

        <h5 className="card-title"> {props.title2} </h5>
        <h6 className="card-subtitle mb-5 text-muted"> {props.subTitle2}</h6>  

        <h5 className="card-title"> {props.title3} </h5>
        <h6 className="card-subtitle mb-5 text-muted"> {props.subTitle3}</h6>    

      </div>
    </div>
  </div>
</div>

    
  );

  
}