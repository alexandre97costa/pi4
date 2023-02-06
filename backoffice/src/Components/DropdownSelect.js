import React, { useEffect, useState } from 'react';

export default function DropdownSelect(props) {
    const [selectedValue, setSelectedValue] = useState(0)

    // o props.items precisa de objetos com value e label

    //Passa a deteção do click da categoria
    useEffect(() => {
        props.onChange(selectedValue)
    }, [selectedValue])

    useEffect(() => {
        if (!!props?.selectedValue) {
            props.onChange(props.selectedValue)
        }
    }, [])

    return (
        <div className='col mb-3'>
            {props.disabled ?
                <select
                    className="form-select h-100"
                    aria-label="Selecione um"
                    value={0}
                    disabled>
                    <option value={0} disabled>{props?.label ?? 'Selecione um'}</option>
                </select>
                :
                <select
                    className="form-select h-100"
                    aria-label="Selecione um"
                    onChange={e => {
                        setSelectedValue(e.target.value)
                    }}
                    value={
                        !!selectedValue ?
                            selectedValue :
                            (props?.selectedValue ?? 0)
                    }
                >
                    <option value={0} disabled>{props?.label ?? 'Selecione um'}</option>
                    {
                        props.items.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item?.value ?? index}>
                                    {item?.label ?? 'item.label'}
                                </option>
                            )
                        })

                    }
                </select>
            }
        </div>
    );
}