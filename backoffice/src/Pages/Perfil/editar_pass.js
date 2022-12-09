import React, { useState } from 'react';
import { FormEditarPass } from '../../Components/FormEditarPass';

export default function EditarPass(props) {
  return (
      <div className="d-flex">
        <FormEditarPass/>
        <div className='col'>botao</div>
      </div>
  );
}
