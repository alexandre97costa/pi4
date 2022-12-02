import { minHeight } from '@mui/system';
import React from 'react'




export default function CartaoAT(props) {
  return (
    <div className="card border border-0 shadow mb-3 p-0" 
    style={{ maxHeight: '500px', minHeight: '250px', height: '500px'}}>
      <div className="row g-0">
        <div className="text-success text-center">
           <i className="bi-plus-lg fs-1 "></i>
          <h5 className="card-title"> {props.title}</h5>         
        </div>
      </div>
    </div>
  );
}
