export function authHeader() {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));

    // Then add checking if access_token is expired
    if (token && token.access_token) {
        return { 'Authorization': 'Bearer ' + token.access_token };
    } else {
        return {};
    }
}
