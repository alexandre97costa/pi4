import React from 'react';

export default function CardForm(props) {
    return (  
        <div className='card card-body shadow rounded-4 border-0'>
            <form className='mt-4 ms-4 me-4'>
                {props.children}
            </form>
        </div>
    );
}