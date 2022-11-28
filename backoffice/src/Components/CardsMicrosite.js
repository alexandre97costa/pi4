import React from "react";

export default function CardsMicrosite(props) {
  return (
    <div className="row pb-4 justify-content-center">
      <div className="col-12 ">

        <div className="row">
          <div className="col-12">

            <div className="row card-group text">

              <div className="col-12 card  p-3 m-2 shadow rounded-3">
                <div className="card-body">
                  <h5 className="card-title text-center">{props.titulo}</h5>
                  <p className="card-text text-center">
                    <small className="text-muted">{props.subTitulo}</small>
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
