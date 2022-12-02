import React from 'react'

import fotoagente from '../../Assets/Images/fotoagente.jpg'


export default function CartaoDetais(props) {
  return (

    <div className="card border ps-0 border-0 shadow mb-3">
      <div className="row g-0">
        <div className="col-3">
          <img src={fotoagente} className="card-img-top rounded-start" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title"> {props.Nome} </h5>
            <h6 className="card-subtitle mb-4 text-muted"> {props.NomeDesc}</h6>

            <h5 className="card-title"> {props.Descricao} </h5>
            <h6 className="card-subtitle mb-4 text-muted"> {props.DescricaoDesc}</h6>

            <h5 className="card-title"> {props.Contacto} </h5>
            <h6 className="card-subtitle mb-4 text-muted"> {props.ContactoDesc}</h6>

            <h5 className="card-title"> {props.Email} </h5>
            <h6 className="card-subtitle text-muted"> {props.EmailDesc}</h6>

          </div>
        </div>
      </div>
    </div>


  );


}