import React from 'react'




export default function CartaoAT(props) {
  return (
    <div className="card border border-0 shadow mb-3 p-0">
      <div className="row g-0">
        <div className="text-center p-5">
           <i className="bi-plus-lg fs-1"></i>
          <h5 className="card-title"> {props.title}</h5>         
        </div>
      </div>
    </div>
  );
}
