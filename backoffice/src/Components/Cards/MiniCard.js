import React from 'react'

export default function MiniCard(props) {
  return (
    <div className="card border-0 shadow text-center h-100 cursor-pointer" onClick={() => console.log(props.id)}>
      <img src={props.imagem} className="card-img-top" />
      <div className="card-body py-3">
        <h5 className="card-title cursor-pointer">{props.title}</h5>
      </div>
    </div>
  );
}
