import axios from 'axios'
import jwt_decode from "jwt-decode";
import dev from './dev'
const ip = process.env.REACT_APP_IP

class auth {
    
    // tenta fazer login
    async login(email, password) {
        return axios
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
                return { success: true, message: 'coise'}
            })
            .catch(e => { 
                try {
                    dev.log('%c' + e.response.data.message, 'color: tomato; background-color: darkred; padding: 0.5rem;') 
                    return { success: false, message: e.response.data.message}
                } catch {
                    dev.log(e)
                    return { success: false, message: e}
                }
            })
    }

    // para quando os pedidos axios precisam de auth headers
    header() {
        const token = localStorage.getItem('token')
        dev.log('token: ' + token)
        if (token) { return { headers: { 'Authorization': 'Bearer ' + token } } }
    }

    logout() { localStorage.removeItem('utilizador') }

    getCurrentUser() { return JSON.parse(localStorage.getItem('utilizador')) }

    // faz logo o trabalho de casa de apanhar só o tipo de user
    // 0 = sem token
    // 1 = visitante
    // 2 = agente turistico
    // 3 = responsavel de regiao
    // 4 = administrador
    getTipo() { return JSON.parse(localStorage?.getItem('utilizador'))?.tipo ?? 0 }

    valid() {
        const now = Math.floor(Date.now() / 1000)
        const exp = JSON.parse(localStorage.getItem('utilizador'))?.exp ?? 0
        return now < exp
    }
}
export default new auth();