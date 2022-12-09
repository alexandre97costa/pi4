import React, { useState } from 'react';
import { FormEditarPass } from '../../Components/FormEditarPass';

export default function EditarPasse(props) {
  return (
    <>
      <div className="">
        <div className="d-flex">
          <FormEditarPass />
          <div className='col'>botao</div>
        </div>
      </div>
    </>
  );
}
