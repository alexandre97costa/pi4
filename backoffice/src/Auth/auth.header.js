export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (process.env.REACT_APP_MODE === "development") {
        console.log("User Token: ",user.token)
    }

    if (user && user.token) {
        return { headers: { 'Authorization': 'Bearer ' + user.token } }
    } else {
        return {}
    }   
}