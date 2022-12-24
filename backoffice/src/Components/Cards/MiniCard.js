import React, { useEffect, useState } from 'react'

export default function MiniCard(props) {
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if(!!flag)
      props.onChange(props.id, true)
    else
      props.onChange(props.id, false)
  }, [flag])

  return (
    <div className={flag ? "card border-0 rounded-4 shadow text-center h-100 cursor-pointer bg-primary-no-transparent text-white" : "card border-0 rounded-4 shadow text-center h-100 cursor-pointer"} onClick={() => setFlag(!flag)}>
      <img src={props.imagem} className="card-img-top" />
      <div className="card-body py-3">
        <h5 className="card-title cursor-pointer">{props.title}</h5>
      </div>
    </div>
  );
}
