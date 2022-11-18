import axios from 'axios'
import jwt_decode from "jwt-decode";
import dev from './dev'
const ip = process.env.REACT_APP_IP

class auth {
    // tenta fazer login
    login(email, password) {
        axios
            .post(ip + '/user/login', { email, password })
            .then(res => {

                // 🚨 guard clauses
                if (!res.data.token) { dev.log('O token não veio')}

                // ✅ all gucci
                const token = res.data.token
                const payload = jwt_decode(res.data.token)

                localStorage.setItem('utilizador', JSON.stringify(payload))
                localStorage.setItem('token', token)

                dev.log('%cLogged in!', 'color: lime; background-color: darkgreen; padding: 0.5rem;')
            })
            .catch(e => { dev.log('%c' + e.response.data.message, 'color: tomato; background-color: darkred; padding: 0.5rem;') })
    }

    // para quando os pedidos axios precisam de auth headers
    header() {
        const token = localStorage.getItem('token')
        dev.log('token: ' + token)
        if (token) { return { headers: { 'Authorization': 'Bearer ' + token } } }
    }

    logout() { localStorage.removeItem('utilizador') }
    getCurrentUser() { return JSON.parse(localStorage.getItem('utilizador')) }

    // todo: isLoginValid() tem que ver a validade do token
    // todo: getUserType() tem que ir buscar o TipoDeUtilizador do user 
}
export default new auth();