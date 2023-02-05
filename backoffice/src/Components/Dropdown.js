import React, { useEffect, useState } from 'react';

export default function Dropdown(props) {
    const [selectedItem, setSelectedItem] = useState(props.items[0] ?? '...')
    const [selectedIndex, setSelectedIndex] = useState(0)

    //Passa a deteção do click da categoria
    useEffect(() => {
        props.onChange(selectedItem, selectedIndex)
    }, [selectedItem, selectedIndex])

    useEffect(() => {
        setSelectedItem(props.items[0])
    }, [props.items])

    return (
        <div className='col'>
            <div className='dropdown w-100 mb-3'>
                <button className="btn w-100 text-start bg-white py-3 border rounded-3 dropdown-toggle d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" disabled={props.disabled}>
                    {selectedItem}
                </button>
                <ul className='dropdown-menu w-100 shadow'>
                    <li className="dropdown-item disabled">Selecione um</li>
                    {props.items.map((item, index) => {
                        return (
                            <li onClick={(value) => { setSelectedItem(item); setSelectedIndex(index) }} key={index} className="dropdown-item">{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}