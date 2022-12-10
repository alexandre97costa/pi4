import React from 'react';

import FormEditarPasse from '../../Components/FormEditarPasse';
import Breadcrumb from '../../Components/Breadcrumb';

export default function EditarPasse() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12">
            <Breadcrumb icon="bi bi-file-earmark" nome="Editar Palavra-passe" />
          </div>

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditarPasse />
          </div>

        </div>
      </div>
    </>
  );
}
