import React, { useState } from 'react';
import FormEditarPerfil from '../../Components/FormEditarPerfil';

export default function EditarPerfil(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12">
            <p className="mb-5 mt-5 ms-5 fs-3 fw-bold">
              <i className="bi bi-file-earmark" />
              Editar Perfil
            </p>
          </div>

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditarPerfil />
          </div>

        </div>
      </div>
    </>
  );
}
