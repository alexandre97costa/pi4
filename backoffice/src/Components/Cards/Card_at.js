import React from 'react'

import fotoagente from '../../Assets/Images/fotoagente.jpg'


export default function CartaoAT(props) {
  return (
    <div className="card border border-0 shadow mb-3 p-0" 
    style={{ maxHeight: '500px', minHeight: '250px'}} >
        <img src={fotoagente} className="card-img-top" />
      <div className="row g-0" >
        <div className="p-3">
          <h5 className="card-title"> {props.title}</h5>
          <h6 className="card-subtitle mb-5 text-muted"> {props.subTitle}</h6>
          <a href="#" className="btn btn-outline-success d-grid">{props.txtLink}</a>
        </div>
      </div>

    </div>
  );
}
