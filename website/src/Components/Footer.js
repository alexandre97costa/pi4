import React from "react";


export default function Footer(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
            <div className="card bg-primary">


                <div className="col-md-4 p-5">
                    <button onClick={(value)=>props.onClick(value)} className="btn btn-outline-light bi bi-facebook me-md-3"></button>
                    <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-light bi bi-instagram me-md-3"></button>
                    <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-light bi bi-twitter"></button>
                </div>
                <div className="col-md-4 p-5">
                    <button onClick={(value)=>props.onClick(value)} className="btn btn-outline-light bi bi-facebook me-md-3"></button>
                    <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-light bi bi-instagram me-md-3"></button>
                    <button onClick={(value)=>props.onClick(value)} className=" btn btn-outline-light bi bi-twitter"></button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
