import axios from 'axios'
import jwt_decode from "jwt-decode";
import dev from './dev'
const ip = process.env.REACT_APP_IP

class auth {
    login(email, password) {
        return axios
            .post(ip + '/user/login', { email, password })
            .then(res => {
                // 🚨 guard clauses
                if (!res.data.token) { dev.log('O token não veio'); return false }
                // ✅ all gucci
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('utilizador', JSON.stringify(jwt_decode(res.data.token)))
            })
            .catch(e => { dev.error(e) })
    }

    logout() { localStorage.removeItem('utilizador') }
    getCurrentUser() { return JSON.parse(localStorage.getItem('utilizador')) }

    // todo: isLoginValid() tem que ver a validade do token
    // todo: getUserType() tem que ir buscar o TipoDeUtilizador do user 
}
export default new auth();