import React, { useState } from 'react';
import Sidebar from '../../Helpers/Sidebar';
import { FormEditarPerfil } from '../../Components/FormEditarPerfil';

export default function EditarPerfil(props) {
  return (
    <div className="d-flex">
      <FormEditarPerfil />
      <div className='col'>botao</div>
    </div>
  );
}
