import React, { useState } from 'react';
import { Sidebar } from '../../Helpers/Sidebar';
import { FormEditarPerfil } from '../../Components/FormEditarPerfil';

export default function EditarPerfil(props) {
  return (
    <>
    <div className="">
      <div className="d-flex">
        <Sidebar/>
        <FormEditarPerfil/>
        <div className='col'>botao</div>
      </div>
    </div>
    </>
  );
}
