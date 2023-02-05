import React, { useEffect, useState } from 'react';

export default function DropdownSelect(props) {
    const [selectedValue, setSelectedValue] = useState(0)

    // o props.items precisa de objetos com value e label

    //Passa a deteção do click da categoria
    useEffect(() => {
        props.onChange(selectedValue)
    }, [selectedValue])


    return (
        <div className='col'>
            <select
                className="form-select form-select-lg mb-3"
                aria-label="Selecione um"
                onChange={e => {
                    setSelectedValue(e.target.value)
                }}
            >
                <option selected disabled>Selecione um</option>
                {
                    props.items.map((item, index) => {
                        return (
                            <option
                                value={item?.value ?? index}>
                                {item?.label ?? 'item.label'}
                            </option>
                        )
                    })

                }
            </select>
        </div>
    );
}