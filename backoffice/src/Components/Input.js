import React from 'react';

export default function Input(props) {
    return (
        <input
            id={changeId()}
            type={changeType()}
            pattern={changePattern()}
            className={changeClassName()}
            placeholder='secret!'
            defaultValue={props.value} 
            onChange={(value) => props.onChange(value)}
            required={props.required}
        />
    )

    function changeClassName() {
        if(!props.className)
            return "form-control rounded-3 h-25"
        return "form-control rounded-3 h-25 " + props.className
    }

    function changeType() {
        if(!props.type)
            return "password"
        return props.type
    }

    function changeId() {
        if(!props.id)
            return
        return props.id
    }

    function changePattern() {
        if(!props.pattern)
            return
        return props.pattern
    }

    function changeValue() {
        if(!props.value)
            return ''
        return props.value
    }
}