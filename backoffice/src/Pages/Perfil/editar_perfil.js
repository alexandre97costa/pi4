import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../Components/sidebar';
import { FormEditar } from '../../Components/form_editar_perfil';

export default function EditarPerfil(props) {
  return (
    <>
    <div className="">
      <div className="d-flex">
        <FormEditar/>
      </div>
    </div>
    </>
  );
}
