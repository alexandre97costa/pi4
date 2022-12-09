import React, { useState } from 'react';
import { FormEditarPerfil } from '../../Components/FormEditarPerfil';

export default function EditarPerfil(props) {
  return (
    <>
      <div className="">
        <div className="d-flex">
          <FormEditarPerfil />
          <div className='col'>botao</div>
        </div>
      </div>
    </>
  );
}
