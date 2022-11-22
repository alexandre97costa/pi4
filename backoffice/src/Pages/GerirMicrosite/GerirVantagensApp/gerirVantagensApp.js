import React from 'react';


export default function GerirVantagensApp(props){
    return (

        <div className='card p-3'>
            <div className='mb-3'>
                <label htmlFor='formGroupExampleInput' className='form-label'>Titulo</label>
                <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Example input placeholder'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='formGroupExampleInput2' className='form-label'>Subtitulo</label>
                <input type='text' className='form-control' id='formGroupExampleInput2' placeholder='Another input placeholder'/>
            </div>
        </div>
    );  
}