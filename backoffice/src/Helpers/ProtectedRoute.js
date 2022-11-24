import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../Auth/auth.service';
const LOGIN_OVERRIDE = process.env.REACT_APP_LOGIN_OVERRIDE

export default function ProtectedRoute({ children }) {
    // envia a pagina onde estamos para o login (pra depois voltar praqui)
    const location = useLocation()
    // truques de magia com javascript (weak types ftw)
    return auth.valid() || !!+LOGIN_OVERRIDE ?
        children :
        <Navigate to={'/login'} state={{ from: location.pathname }} />
}