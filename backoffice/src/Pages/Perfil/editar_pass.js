import React, { useState } from 'react';
import { Sidebar } from '../../Components/sidebar';
import { FormEditarPass } from '../../Components/form_editar_pass';

export default function EditarPass(props) {
  return (
    <>
    <div className="">
      <div className="d-flex">
        <FormEditarPass/>
      </div>
    </div>
    </>
  );
}
