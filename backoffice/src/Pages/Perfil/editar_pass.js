import React, { useState } from 'react';
import { Sidebar } from '../../Components/Sidebar';
import { FormEditarPass } from '../../Components/FormEditarPass';

export default function EditarPass(props) {
  return (
    <>
    <div className="">
      <div className="d-flex">
        <Sidebar/>
        <FormEditarPass/>
        <div className='col'>botao</div>
      </div>
    </div>
    </>
  );
}
