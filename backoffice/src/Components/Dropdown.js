import React, { useEffect, useState } from 'react';

export default function Dropdown(props) {
    const [select, setSelect] = useState(props.tipos[0])

    //Passa a deteção do click da categoria
    useEffect(() => {
        props.onChange(select)
    }, [select])

    return (
        <div className='dropdown mb-3'>
            <button className="btn w-100 text-start bg-white border rounded-4 shadow-1 dropdown-toggle me-md-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {select}
            </button>
            <ul className='dropdown-menu'>
                {props.tipos.map((item, index) => {
                    return (
                        <li onClick={(value) => setSelect(value.target.outerText)} key={index} className="dropdown-item">{item}</li>
                    )
                })}
            </ul>
        </div>
    );
}