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
                if (!res.data.token) { return { success: false, message: 'Falha ao receber o token.' } }
                const payload = jwt_decode(res.data.token)
                const token = res.data.token
                if (payload?.tipo ?? 0 <= 1) { return { success: false, message: 'O Back Office não está disponivel para visitantes.' } }
                
                // ✅ all gucci

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

    valid() {
        const now = Math.floor(Date.now() / 1000)
        const exp = JSON.parse(localStorage.getItem('utilizador'))?.exp ?? 0
        return now < exp
    }
}
export default new auth();