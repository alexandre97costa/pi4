import axios from 'axios'
import jwt_decode from "jwt-decode";
import dev from './dev'
const ip = process.env.REACT_APP_IP

class auth {

    // tenta fazer login
    async login(email, password, longExp) {
        return await axios
            .post(ip + '/user/login', { email, password, longExp })
            .then(res => {

                // 🚨 guard clauses
                if (!res.data.token) { return { success: false, message: 'Falha ao receber o token' } }
                const payload = jwt_decode(res.data.token)
                const token = res.data.token
                if (payload) {  }
                
                // ✅ all gucci
                localStorage.setItem('utilizador', JSON.stringify(payload))
                localStorage.setItem('token', token)

                dev.log('%cLogged in!', 'color: lime; background-color: darkgreen; padding: 0.5rem;')
                return { success: true, message: 'Logged in!' }
            })
            .catch(e => {
                try {
                    dev.log('%c' + e.response.data.message, 'color: tomato; background-color: darkred; padding: 0.5rem;')
                    return { success: false, message: e.response.data.message }
                } catch {
                    dev.log(e)
                    return { success: false, message: e }
                }
            })
    }

    // para quando os pedidos axios precisam de auth headers
    header() {
        const token = localStorage.getItem('token')
        if (token) { return { headers: { 'Authorization': 'Bearer ' + token } } }
    }

    logout() { localStorage.removeItem('utilizador') }

    async getCurrentUser() {
        const user = new Promise((resolve, reject) => {
            const now = Math.floor(Date.now() / 1000)
            while (!('utilizador' in localStorage)) {
                const after = Math.floor(Date.now() / 1000)
                if (after - now > 5) {
                    reject(null)
                }
            }
            resolve(JSON.parse(localStorage.getItem('utilizador')))
        })
        return user
    }

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