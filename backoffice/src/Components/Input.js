import React from 'react';

export default function Input(props) {
    return (
        <>
            <input
                id={props.id}
                type={changeType()}
                className={changeClassName()}
                placeholder={props.placeholder}
                pattern={props.pattern}
                defaultValue={props.value}
                onChange={(valeu) => props.onchange(valeu)}
                required={props.required}
            />
        </>
    )

    function changeClassName() {
        if (!props.className)
            return "form-control"
        return "form-control " + props.className
    }

    function changeType() {
        if (!props.type)
            return "text"
        return props.type
    }

    function changeValue() {
        if (!props.value)
            return ''
        return props.value
    }
}