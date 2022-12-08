import React from 'react'

import jardimMaes from '../../Assets/Images/jardimMaes.jpg'

export default function CardPontoInteresseRemove(props) {
  return (
    <div className="card border border-0 shadow mb-3 p-0" style={{ maxHeight: '500px', minHeight: '250px', height: '500px' }}>
      <img src={jardimMaes} className="card-img-top" />
      <div className="card-body p-0" >
        <div className="p-3">
          <h5 className="card-title"> {props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted"> {props.subTitle}</h6>
          <p className="card-text"> {props.morada}</p>
          <div className="h3 text-center py-3">
            <a href="#" className="bi bi-qr-code-scan text-success px-2"></a>
            <a href="#" className="bi bi-chat text-primary px-2"></a>
            <a href="#" className="bi bi-star text-warning px-2"></a>
            <a href="#" className="bi bi-journal-check text-info px-2"></a>
          </div>
          <a href="#" className="btn btn-outline-danger d-grid">{props.txtLink}</a>
        </div>
      </div>
    </div>
  );
}


