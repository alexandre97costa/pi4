import React, { useState } from 'react';
import FormEditarPasse from '../../Components/FormEditarPasse';

export default function EditarPasse() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12">
            <p className="mb-5 mt-5 ms-5 fs-3 fw-bold">
              <i className="bi bi-file-earmark" />
              Editar Palavra-passe
            </p>
          </div>

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditarPasse />
          </div>

        </div>
      </div>
    </>
  );
}
