const adminToken = '';

export function setToken(value) {
    sessionStorage.setItem(adminToken, value);
}

export function getToken() {
    sessionStorage.getItem(adminToken);
}