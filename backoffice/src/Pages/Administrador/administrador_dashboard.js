import React, { useState } from 'react';
import { Administrador } from '../../Components/administrador_corpo';
import  Bar  from '../../Components/graficos';

export default function EditarPass(props) {
  return (
    <>
    <div className="">
      <div className="d-flex">
        <Administrador/>
        <Bar/>
        </div>
      </div>
    </>
  );
}
