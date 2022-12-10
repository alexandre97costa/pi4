import React from 'react';

import FormEditarPerfil from '../../Components/FormEditarPerfil';
import Breadcrumb from '../../Components/Breadcrumb';

export default function EditarPerfil(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12">
            <Breadcrumb icon="bi bi-file-earmark" nome="Editar Perfil"/>
          </div>

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditarPerfil />
          </div>

        </div>
      </div>
    </>
  );
}
