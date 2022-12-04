import React from 'react'


export default function CartaoAT(props) {
  return (

      <div className="card border border-0 shadow mb-3 p-0"
        style={{maxHeight: '500px', minHeight: '250px', height: '500px' }}>             
          <div className="text-success text-center my-auto">          
              <i className="bi-plus-lg fs-1 "></i>               
              <h5 className="card-title"> {props.title}</h5>
          </div>
        </div>

  );
}
