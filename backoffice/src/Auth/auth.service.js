import axios from 'axios'
import ip from '../ip'

class AuthService {
    login(email, password) {
        return axios
            .post(ip + '/user/login', { email, password })
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('user', JSON.stringify(res.data))
                }
                return res.data
            }, rejected => { return rejected })
    }

    logout() { localStorage.removeItem('user') }
    getCurrentUser() { return JSON.parse(localStorage.getItem('user')) }

    // todo: isLoginValid() tem que ver a validade do token
    // todo: getUserType() tem que ir buscar o TipoDeUtilizador do user 
}
export default new AuthService();