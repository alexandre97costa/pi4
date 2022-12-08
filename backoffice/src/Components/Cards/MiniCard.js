import React from 'react'

import jardimMaes from '../../Assets/Images/jardimMaes.jpg'

export default function MiniCard(props) {
  return (

    <div className="card border border-0 shadow mb-3 p-0 text-center"   >
      <img src={jardimMaes} className="card-img-top" style={{ maxHeight: '200px'}}  />
      <div className="card-body p-0"  >
        <div className="p-3">
          <h5 className="card-title"> {props.title}</h5>
        </div>
      </div>
    </div> 

  );
}
