import auth from '../Auth/auth.service'

// * tipo *
// 1 = visitante
// 2 = agente turístico
// 3 = responsável de região
// 4 = administrador

export default function VisibleTo({tipo, children}) { 
    // todo: mudar pra getCurrentUser() por ser async
    return auth.getTipo() === tipo && children 
}