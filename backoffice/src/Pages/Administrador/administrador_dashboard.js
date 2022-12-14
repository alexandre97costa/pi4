import React, { useState } from 'react';
import { Administrador } from '../../Components/administrador_corpo';
import  Bar  from '../../Components/graficos';

export default function EditarPass(props) {
  return (
    <>
    <div className="d_flex justify-content-around">
        <Administrador/>
        <div className='ms-5 mt-5'>
        <p className="fs-6">Utilizadores</p>
        <Bar/>
        </div>
      </div>
    </>
  );
}
