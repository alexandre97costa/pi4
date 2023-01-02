import React from 'react';

export default function CardBackground(props) {
    function changeClassName() {
        if(!props.className)
            return "card bg-microsite border-0 rounded-4 shadow"
        return "card " + props.className
    }

    return (
        <div className={changeClassName()}>
            <div className='card-body'>
                {props.children}
            </div>
        </div>
    );
}