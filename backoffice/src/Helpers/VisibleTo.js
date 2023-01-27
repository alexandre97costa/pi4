import React from 'react';
import auth from '../Auth/auth.service'
import dev from '../Auth/dev'

// * tipo *
// 1 = visitante
// 2 = agente turístico
// 3 = responsável de região
// 4 = administrador

export default function VisibleTo({ tipo, children }) {
    const user = auth.getUser()
    return ((user?.tipo ?? 0) === +tipo && children)
}