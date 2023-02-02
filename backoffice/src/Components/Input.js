import React, { useState, useEffect } from 'react';

export default function Input(props) {
    return (
        <div className='col'>
            <div class="form-floating w-100 mb-3">
                <input
                    id={props.id}
                    type={!!props.type ? props.type : 'text'}
                    className={'form-control border ' + (props?.className ?? '')}
                    placeholder={props?.placeholder ?? 'placeholder'}
                    pattern={props.pattern}
                    defaultValue={props.value}
                    min={props.min}
                    max={props.max}
                    onChange={e => props.onChange(e)}
                    required={props.required}
                />
                <label for={props.id}>{props?.label ?? 'props.label'}</label>
            </div>
        </div>
    )
}