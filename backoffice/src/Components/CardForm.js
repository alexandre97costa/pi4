import React, { useEffect } from 'react';

export default function CardForm(props) {
    useEffect(() => {
        console.log("Dei render ao CardForm")
    }, [])
    return (
        <div className='card card-body shadow rounded-4 border-0 my-4'>
            {props.children}
        </div>
    );
}