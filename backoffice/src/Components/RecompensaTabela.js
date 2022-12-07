import React from "react";

export function RecompensaTabela(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">

            <div ul className="list-group pb-5">
              <div li className="list-group-item d-flex justify-content-between align-items-center"> {props.nomePI}
                <button onClick={(value)=>props.onClick(value)} className= "btn btn-Light "> + Criar recompensa</button>
              </div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="row">
                  <div className="col-10">
                    {props.nomeRecompensa0}
                  </div>
                </div>
                <div className="col- align-self-end pb-2 pt-2">
                  <button onClick={(value)=>props.onClick(value)} className="btn btn-outline-warning bi bi-pencil-fill me-md-3">Editar</button>
                  <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-danger bi bi-trash-fill">Eliminar</button>
                </div>
              </div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa1}
                <div className="col- align-self-end pb-2 pt-2">
                  <button onClick={(value)=>props.onClick(value)} className="btn btn-outline-warning bi bi-pencil-fill me-md-3">Editar</button>
                  <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-danger bi bi-trash-fill">Eliminar</button>
                </div>
              </div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa2}
                <div className="col- align-self-end pb-2 pt-2">
                  <button onClick={(value)=>props.onClick(value)} className="btn btn-outline-warning bi bi-pencil-fill me-md-3">Editar</button>
                  <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-danger bi bi-trash-fill">Eliminar</button>
                </div>
              </div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa3}
                <div className="col- align-self-end pb-2 pt-2">
                  <button onClick={(value)=>props.onClick(value)} className="btn btn-outline-warning bi bi-pencil-fill me-md-3">Editar</button>
                  <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-danger bi bi-trash-fill">Eliminar</button>
                </div>
              </div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa4}
                <div className="col- align-self-end pb-2 pt-2">
                  <button onClick={(value)=>props.onClick(value)} className="btn btn-outline-warning bi bi-pencil-fill me-md-3">Editar</button>
                  <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-danger bi bi-trash-fill">Eliminar</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
